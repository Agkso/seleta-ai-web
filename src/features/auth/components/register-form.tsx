"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Span } from "@/components/ui/span";
import { Flex } from "@/components/ui/flex";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { useRoles } from "@/features/roles/hooks/use-roles";
import { ApiError } from "@/api/generated";

const REGISTRABLE_ROLES = ["PRESTADOR", "CONTRATANTE"];

const ROLE_LABELS: Record<string, string> = {
  PRESTADOR: "Prestador — quero me candidatar a processos",
  CONTRATANTE: "Contratante — quero publicar editais",
};

export const RegisterForm = () => {
  const { registerMutation } = useAuth();
  const { data: roles, isLoading: rolesLoading } = useRoles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState("");

  const availableRoles = (roles ?? []).filter((role) => REGISTRABLE_ROLES.includes(role.name ?? ""));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    registerMutation.mutate({ name, email, password, roleId: Number(roleId) });
  };

  const errorMessage =
    registerMutation.error instanceof ApiError
      ? "Não foi possível concluir o cadastro. Verifique os dados."
      : registerMutation.error
      ? "Não foi possível concluir o cadastro. Tente novamente."
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
          Criar conta
        </Text>
        <Text color="muted">Leva menos de um minuto.</Text>
      </Flex>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          label="Nome completo"
          placeholder="Seu nome"
          icon={<User size={18} />}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Select
          label="Você é"
          required
          value={roleId}
          onChange={(e) => setRoleId(e.target.value)}
          disabled={rolesLoading}
        >
          <option value="" disabled>
            {rolesLoading ? "Carregando opções..." : "Selecione um perfil"}
          </option>
          {availableRoles.map((role) => (
            <option key={role.id} value={role.id}>
              {ROLE_LABELS[role.name ?? ""] ?? role.name}
            </option>
          ))}
        </Select>

        {errorMessage && (
          <Span variant="error" size="xs" className="self-start">
            {errorMessage}
          </Span>
        )}

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="mt-2 rounded-2xl w-full normal-case font-bold tracking-normal"
          isLoading={registerMutation.isPending}
          disabled={!roleId}
        >
          Criar conta
          <ArrowRight size={18} className="ml-2" />
        </Button>
      </form>

      <Text size="sm" color="muted" className="mt-8 text-center block">
        Já tem conta?{" "}
        <Link href="/login" className="font-bold text-brand-secondary hover:underline">
          Entrar
        </Link>
      </Text>
    </div>
  );
};
