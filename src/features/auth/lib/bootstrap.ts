import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { OpenAPI } from "@/api/generated";
import { myApi } from "@/api/client/myApi";
import { getRefreshToken, setTokens, clearTokens, getToken } from "./token-storage";

type RetryableRequest = InternalAxiosRequestConfig & { _retry?: boolean };
type FailedRequest = {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
};

let initialized = false;
let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: unknown, token: string | null) => {
  failedQueue.forEach((request) => {
    if (token) request.resolve(token);
    else request.reject(error);
  });
  failedQueue = [];
};

export const initAuth = (): void => {
  if (initialized) return;
  initialized = true;

  OpenAPI.BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081";
  OpenAPI.TOKEN = async () => getToken() ?? "";

  axios.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as RetryableRequest;

      if (error.response?.status !== 401 || originalRequest._retry || originalRequest.url?.includes("/auth/")) {
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers = originalRequest.headers ?? ({} as InternalAxiosRequestConfig["headers"]);
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axios(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = getRefreshToken();
        if (!refreshToken) throw error;

        const { accessToken } = await myApi.auth.refresh({ refreshToken });
        if (!accessToken) throw error;

        setTokens(accessToken, refreshToken);
        processQueue(null, accessToken);

        originalRequest.headers = originalRequest.headers ?? ({} as InternalAxiosRequestConfig["headers"]);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        clearTokens();
        if (typeof window !== "undefined") window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    },
  );
};
