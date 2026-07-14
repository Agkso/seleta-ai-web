import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { myApi } from "@/api/client/myApi";
import { setTokens, clearTokens } from "@/features/auth/lib/token-storage";

import { LoginRequest, RegisterRequest, AuthResponse } from "@/api/generated";

export const useAuth = () => {
  const router = useRouter();

  const loginMutation = useMutation<AuthResponse, Error, LoginRequest>({
    mutationFn: (credentials) => myApi.auth.login(credentials),
    onSuccess: (data) => {
      setTokens(data.token!, data.refreshToken!);
      router.push("/portal");
    },
  });

  const registerMutation = useMutation<AuthResponse, Error, RegisterRequest>({
    mutationFn: (userData) => myApi.auth.register(userData),
    onSuccess: (data) => {
      setTokens(data.token!, data.refreshToken!);
      router.push("/portal");
    },
  });

  const logout = () => {
    clearTokens();
    router.push("/login");
  };

  return { loginMutation, registerMutation, logout };
};
