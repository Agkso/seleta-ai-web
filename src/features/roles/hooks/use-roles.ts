import { useQuery } from "@tanstack/react-query";
import { myApi } from "@/api/client/myApi";

export const useRoles = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: () => myApi.role.listAll(),
    staleTime: 5 * 60 * 1000,
  });
};
