"use client";

import { useSyncExternalStore } from "react";
import { isAuthenticated, subscribeAuth } from "@/features/auth/lib/token-storage";

const getServerSnapshot = () => false;

export const useIsAuthenticated = (): boolean =>
  useSyncExternalStore(subscribeAuth, isAuthenticated, getServerSnapshot);
