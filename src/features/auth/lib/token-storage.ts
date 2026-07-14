const TOKEN_KEY = "@SeletoAI:token";
const REFRESH_TOKEN_KEY = "@SeletoAI:refreshToken";

type Listener = () => void;
const listeners = new Set<Listener>();
const notify = () => listeners.forEach((listener) => listener());

export const subscribeAuth = (listener: Listener): (() => void) => {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
};

export const getToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
};

export const getRefreshToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const setTokens = (token: string, refreshToken: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  notify();
};

export const clearTokens = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  notify();
};

export const isAuthenticated = (): boolean => !!getToken();
