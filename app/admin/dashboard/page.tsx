// app/admin/dashboard/page.tsx
import { Flex } from "@/app/_components/flex";
import { Section } from "@/app/_components/section";
import { Text } from "@/app/_components/text";
import { Button } from "@/app/_components/button";
import { Card } from "@/app/_components/card";
import { FileCheck, ShieldCheck, Zap } from "lucide-react";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Section variant="adm" className="py-4">
        <Flex justify="between">
          <Flex gap={4}>
            <div className="bg-emerald-500 p-2 rounded-lg">
              <ShieldCheck className="text-slate-900" size={24} />
            </div>
            <Text variant="title" className="text-xl text-white">
              SeletoAI <span className="text-emerald-400">Gov</span>
            </Text>
          </Flex>
          <Flex gap={6}>
            <Text variant="ia">Sincronizado com PostgreSQL</Text>
            <div className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600" />
          </Flex>
        </Flex>
      </Section>

      <Section variant="ghost">
        <Flex justify="between" className="mb-8">
          <Flex dir="col" items="start">
            <Text variant="subtitle" size="2xl">Gestão de Editais</Text>
            <Text color="muted">Acompanhamento de segurança e classificação automática</Text>
          </Flex>
          <Button variant="success" className="rounded-xl shadow-emerald-200">
            + Criar Novo Edital
          </Button>
        </Flex>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="elevated">
            <Flex dir="col" items="start" gap={4}>
              <div className="p-3 bg-slate-100 rounded-2xl text-slate-600">
                <FileCheck />
              </div>
              <Text variant="subtitle">Edital #2026-001</Text>
              <Text size="sm" color="muted">Prefeitura Municipal de Maringá</Text>
              
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[75%]" />
              </div>
              <Text size="xs" weight="bold">75% dos documentos validados</Text>
            </Flex>
          </Card>

          <Card className="bg-slate-900 text-white relative overflow-hidden group border-none">
            <Zap className="absolute right-[-10px] top-[-10px] text-slate-800 size-32 group-hover:text-emerald-500/10 transition-colors" />
            <Flex dir="col" items="start" gap={4} className="relative z-10">
              <Text variant="caption" className="text-emerald-400">Status Assistente IA</Text>
              <Text variant="subtitle">Chatbot Ativo</Text>
              <Text size="sm" className="text-slate-400">
                432 dúvidas jurídicas respondidas hoje sem intervenção humana.
              </Text>
              <Button variant="ghost" size="sm" className="text-emerald-400 p-0 hover:bg-transparent border-b border-emerald-400/30 rounded-none">
                Ver logs de auditoria
              </Button>
            </Flex>
          </Card>
        </div>
      </Section>
    </main>
  );
}