"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useIsAuthenticated } from "./use-is-authenticated";

export const useRequireAuth = (): boolean => {
  const router = useRouter();
  const authed = useIsAuthenticated();

  useEffect(() => {
    if (!authed) router.replace("/login");
  }, [authed, router]);

  return authed;
};
