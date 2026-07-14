"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Flex } from "@/components/ui/flex";
import { Text } from "@/components/ui/text";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { useIsAuthenticated } from "@/features/auth/hooks/use-is-authenticated";

export const Navbar = () => {
  const { logout } = useAuth();
  const authed = useIsAuthenticated();

  return (
    <nav className="border-b px-8 py-4 flex justify-between items-center bg-slate-50/50 backdrop-blur-md sticky top-0 z-50">
      <Link href={authed ? "/portal" : "/"}>
        <Text variant="title" color="secondary" className="text-2xl">
          SeletoAI
        </Text>
      </Link>
      <Flex gap={4}>
        <Text variant="body" className="cursor-pointer hover:text-brand-secondary transition font-medium">
          Editais Abertos
        </Text>
        <Text variant="body" className="cursor-pointer hover:text-brand-secondary transition font-medium">
          Minhas Inscrições
        </Text>
        {authed ? (
          <Button variant="ghost" size="sm" className="rounded-full" onClick={logout}>
            <LogOut size={16} className="mr-1.5" />
            Sair
          </Button>
        ) : (
          <>
            <Link href="/login">
              <Button variant="outline" size="sm" className="rounded-full">
                Entrar
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="secondary" size="sm" className="rounded-full">
                Cadastrar
              </Button>
            </Link>
          </>
        )}
      </Flex>
    </nav>
  );
};
