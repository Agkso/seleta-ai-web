import { ShieldCheck } from "lucide-react";
import { Flex } from "@/components/ui/flex";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { AnalyticsDashboard } from "@/features/processos/components/analytics-dashboard";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Section variant="adm" className="py-4">
        <Flex justify="between">
          <Flex gap={4}>
            <div className="bg-emerald-500 p-2 rounded-lg">
              <ShieldCheck className="text-slate-900" size={24} />
            </div>
            <Text variant="title" className="text-xl text-white">
              SeletoAI <span className="text-emerald-400">Contratante</span>
            </Text>
          </Flex>
          <Flex gap={6}>
            <Text variant="ia">Painel de processos e licitações</Text>
            <div className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600" />
          </Flex>
        </Flex>
      </Section>

      <AnalyticsDashboard />
    </main>
  );
}
