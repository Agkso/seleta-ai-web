import { useQuery } from "@tanstack/react-query";
import { myApi } from "@/api/client/myApi";

export const useProcessosPublicos = () => {
  return useQuery({
    queryKey: ["processos", "publicos"],
    queryFn: () => myApi.processo.listarProcessosPublicos(),
  });
};
