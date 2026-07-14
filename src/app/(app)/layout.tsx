"use client";

import { ReactNode } from "react";
import { useRequireAuth } from "@/features/auth/hooks/use-require-auth";

export default function AppLayout({ children }: { children: ReactNode }) {
  const authed = useRequireAuth();

  if (!authed) return null;

  return <>{children}</>;
}
