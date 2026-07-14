"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Flex } from "@/components/ui/flex";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { ApiError } from "@/api/generated";

export const LoginForm = () => {
  const { loginMutation } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  const errorMessage =
    loginMutation.error instanceof ApiError
      ? "Email ou senha inválidos."
      : loginMutation.error
      ? "Não foi possível entrar. Tente novamente."
      : undefined;

  return (
    <div className="w-full max-w-sm">
      <Flex dir="col" items="start" gap={2} className="mb-10 lg:hidden">
        <Text variant="title" color="secondary" className="text-2xl">
          SeletoAI
        </Text>
      </Flex>

      <Flex dir="col" items="start" gap={2} className="mb-8">
        <Text variant="subtitle" size="2xl">
          Entrar na plataforma
        </Text>
        <Text color="muted">Acesse sua conta de prestador ou contratante.</Text>
      </Flex>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          label="Email"
          type="email"
          placeholder="voce@empresa.com"
          icon={<Mail size={18} />}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="••••••••"
          icon={<Lock size={18} />}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errorMessage}
        />

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="mt-2 rounded-2xl w-full normal-case font-bold tracking-normal"
          isLoading={loginMutation.isPending}
        >
          Entrar
          <ArrowRight size={18} className="ml-2" />
        </Button>
      </form>

      <Text size="sm" color="muted" className="mt-8 text-center block">
        Ainda não tem conta?{" "}
        <Link href="/register" className="font-bold text-brand-secondary hover:underline">
          Cadastre-se
        </Link>
      </Text>
    </div>
  );
};
