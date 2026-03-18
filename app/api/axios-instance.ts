import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

type FailedRequest = {
  resolve: (token: string) => void;
  reject: (error: AxiosError) => void;
};

type RetryableRequest = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
});

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else if (token) {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("@SeletoAI:token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableRequest;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers = originalRequest.headers ?? {};
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem("@SeletoAI:refreshToken");

        const { data } = await axios.post<{
          accessToken: string;
          refreshToken: string;
        }>("http://localhost:8080/auth/refresh", { refreshToken });

        localStorage.setItem("@SeletoAI:token", data.accessToken);
        localStorage.setItem("@SeletoAI:refreshToken", data.refreshToken);

        api.defaults.headers.common["Authorization"] = "Bearer " + data.accessToken;

        originalRequest.headers = originalRequest.headers ?? {};
        originalRequest.headers["Authorization"] = "Bearer " + data.accessToken;

        processQueue(null, data.accessToken);

        return api(originalRequest);
      } catch (err) {
        processQueue(err as AxiosError, null);

        localStorage.removeItem("@SeletoAI:token");
        localStorage.removeItem("@SeletoAI:refreshToken");
        window.location.href = "/login";

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);
