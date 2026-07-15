"use client";

import { useState } from "react";
import { Flex } from "@/components/ui/flex";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Span } from "@/components/ui/span";
import { Users, CheckCircle2, TrendingUp, AlertTriangle, Sparkles, Inbox } from "lucide-react";
import { useProcessosPublicos } from "@/features/processos/hooks/use-processos-publicos";
import { useProcessoAnalytics } from "@/features/processos/hooks/use-processo-analytics";

export const AnalyticsDashboard = () => {
  const [selectedProcessoId, setSelectedProcessoId] = useState<string>("");

  const { data: processos } = useProcessosPublicos();
  const processoId = selectedProcessoId || (processos?.[0]?.id ? String(processos[0].id) : "");
  const { data: analytics, isLoading: analyticsLoading } = useProcessoAnalytics(processoId);

  const maxSerieValue = Math.max(
    1,
    ...(analytics?.serie ?? []).flatMap((s) => [s.inscricoes ?? 0, s.aprovados ?? 0])
  );

  return (
    <Section variant="ghost">
      <Flex justify="between" className="mb-8 flex-wrap gap-4">
        <Flex dir="col" items="start">
          <Text variant="subtitle" size="2xl">
            Métricas do processo
          </Text>
          <Text color="muted">Acompanhamento de inscrições, aprovação e alertas em tempo real</Text>
        </Flex>

        <div className="w-full sm:w-72">
          <Select
            value={processoId}
            onChange={setSelectedProcessoId}
            placeholder="Selecione um processo"
            options={(processos ?? []).map((p) => ({
              value: String(p.id),
              label: `${p.titulo} · ${p.numeroEdital}`,
            }))}
          />
        </div>
      </Flex>

      {!processoId && (
        <Flex dir="col" gap={2} className="py-20 text-center" justify="center">
          <Inbox className="mx-auto text-slate-300" size={40} />
          <Text color="muted">Nenhum processo disponível para exibir métricas ainda.</Text>
        </Flex>
      )}

      {processoId && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card variant="elevated">
              <Flex dir="col" items="start" gap={2}>
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                  <Users size={22} />
                </div>
                <Text size="sm" color="muted">
                  Total de inscrições
                </Text>
                <Text variant="title" className="normal-case text-3xl">
                  {analyticsLoading ? "—" : analytics?.totalInscricoes ?? 0}
                </Text>
              </Flex>
            </Card>

            <Card variant="elevated">
              <Flex dir="col" items="start" gap={2}>
                <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                  <CheckCircle2 size={22} />
                </div>
                <Text size="sm" color="muted">
                  Aprovados
                </Text>
                <Text variant="title" className="normal-case text-3xl">
                  {analyticsLoading ? "—" : analytics?.totalAprovado ?? 0}
                </Text>
              </Flex>
            </Card>

            <Card variant="elevated">
              <Flex dir="col" items="start" gap={2}>
                <div className="p-3 bg-slate-100 rounded-2xl text-slate-600">
                  <TrendingUp size={22} />
                </div>
                <Text size="sm" color="muted">
                  Taxa de aprovação
                </Text>
                <Text variant="title" className="normal-case text-3xl">
                  {analyticsLoading ? "—" : `${((analytics?.taxaAprovacao ?? 0) * 100).toFixed(1)}%`}
                </Text>
              </Flex>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="elevated" className="md:col-span-2">
              <Flex justify="between" className="mb-6">
                <Text variant="subtitle" size="lg">
                  Inscrições x Aprovados
                </Text>
                <Flex gap={4}>
                  <Flex gap={2}>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary" />
                    <Text size="xs" color="muted">
                      Inscrições
                    </Text>
                  </Flex>
                  <Flex gap={2}>
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-success" />
                    <Text size="xs" color="muted">
                      Aprovados
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              {(!analytics?.serie || analytics.serie.length === 0) && (
                <Text size="sm" color="muted">
                  Sem dados de série ainda.
                </Text>
              )}

              <Flex dir="col" gap={4}>
                {analytics?.serie?.map((point) => (
                  <div key={point.date} className="flex flex-col gap-1">
                    <Text size="xs" color="muted">
                      {point.date}
                    </Text>
                    <div className="flex flex-col gap-1">
                      <div
                        title={`Inscrições: ${point.inscricoes}`}
                        className="h-2.5 rounded-full bg-brand-secondary"
                        style={{ width: `${((point.inscricoes ?? 0) / maxSerieValue) * 100}%`, minWidth: "4px" }}
                      />
                      <div
                        title={`Aprovados: ${point.aprovados}`}
                        className="h-2.5 rounded-full bg-brand-success"
                        style={{ width: `${((point.aprovados ?? 0) / maxSerieValue) * 100}%`, minWidth: "4px" }}
                      />
                    </div>
                  </div>
                ))}
              </Flex>
            </Card>

            <Card className="bg-slate-900 text-white relative overflow-hidden group border-none">
              <Sparkles className="absolute right-[-10px] top-[-10px] text-slate-800 size-32 group-hover:text-emerald-500/10 transition-colors" />
              <Flex dir="col" items="start" gap={4} className="relative z-10">
                <Span variant="ia" size="md" className="gap-1.5">
                  <Sparkles size={12} />
                  Insights da IA
                </Span>
                {(!analytics?.insights || analytics.insights.length === 0) && (
                  <Text size="sm" className="text-slate-400">
                    Nenhum insight gerado para este processo ainda.
                  </Text>
                )}
                {analytics?.insights?.map((insight, i) => (
                  <Flex key={i} dir="col" items="start" gap={2}>
                    <Text variant="subtitle" size="sm">
                      {insight.title}
                    </Text>
                    <Text size="sm" className="text-slate-400">
                      {insight.description}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Card>
          </div>

          {analytics?.alerts && analytics.alerts.length > 0 && (
            <Card variant="outline" className="mt-6 border-amber-200 bg-amber-50/50">
              <Flex dir="col" items="start" gap={2}>
                <Flex gap={2}>
                  <AlertTriangle size={18} className="text-amber-600" />
                  <Text variant="subtitle" size="sm" className="text-amber-800">
                    Alertas
                  </Text>
                </Flex>
                {analytics.alerts.map((alert, i) => (
                  <Text key={i} size="sm" className="text-amber-700">
                    {alert.message}
                  </Text>
                ))}
              </Flex>
            </Card>
          )}
        </>
      )}
    </Section>
  );
};
