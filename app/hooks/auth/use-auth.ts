import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { myApi } from "@/app/api/client/myApi";

import { LoginRequestDTO, RegisterRequestDTO, AuthResponseDTO } from "@/app/api/generated";

export const useAuth = () => {
  const router = useRouter();

  const loginMutation = useMutation<AuthResponseDTO, Error, LoginRequestDTO>({
    mutationFn: async (credentials) => {
      const response = await myApi.auth.login(credentials);
      return response;
    },
    onSuccess: (data) => {
      localStorage.setItem("@SeletoAI:token", data.token!);
      localStorage.setItem("@SeletoAI:refreshToken", data.refreshToken!);

      router.push("/portal");
    },
  });

  const registerMutation = useMutation<void, Error, RegisterRequestDTO>({
    mutationFn: async (userData) => {
      await myApi.auth.register(userData);
    },
    onSuccess: () => {
      alert("Conta criada com sucesso! Faça seu login.");
      router.push("/login");
    },
  });

  return { loginMutation, registerMutation };
};
