import { useQuery } from "@tanstack/react-query";
import { myApi } from "@/api/client/myApi";

export const useProcessoAnalytics = (processoId: string) => {
  return useQuery({
    queryKey: ["analytics", "dashboard", processoId],
    queryFn: () => myApi.analytics.dashboard(Number(processoId)),
    enabled: !!processoId,
  });
};
