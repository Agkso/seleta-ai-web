"use client";

import { useMemo, useState } from "react";
import { Flex } from "@/components/ui/flex";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Span } from "@/components/ui/span";
import { Search, FileText, Building2, CalendarClock, Inbox } from "lucide-react";
import { useProcessosPublicos } from "@/features/processos/hooks/use-processos-publicos";
import { ProcessoSeletivo } from "@/api/generated";

const TIPO_LABELS: Record<string, string> = {
  PUBLICO: "Licitação pública",
  UNIVERSIDADE: "Processo institucional",
  EMPRESA: "Processo privado",
};

const formatDate = (value?: string) => {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
};

export const ProcessoList = () => {
  const [search, setSearch] = useState("");
  const { data: processos, isLoading } = useProcessosPublicos();

  const filtered = useMemo(() => {
    const list = processos ?? [];
    if (!search.trim()) return list;
    const term = search.toLowerCase();
    return list.filter(
      (p: ProcessoSeletivo) =>
        p.titulo?.toLowerCase().includes(term) || p.numeroEdital?.toLowerCase().includes(term)
    );
  }, [processos, search]);

  return (
    <Section variant="ghost" className="pt-16">
      <Flex dir="col" gap={2} className="text-center mb-12">
        <Text variant="title" className="normal-case text-4xl tracking-tight">
          Editais e processos abertos.
        </Text>
        <Text variant="body" color="muted" className="text-lg">
          Encontre licitações e processos seletivos com apoio de IA em cada etapa.
        </Text>
      </Flex>

      <div className="max-w-2xl mx-auto mb-16">
        <Input
          icon={<Search size={20} />}
          placeholder="Buscar por título ou número do edital..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
        {isLoading &&
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-24 rounded-2xl bg-slate-100 animate-pulse" />
          ))}

        {!isLoading && filtered.length === 0 && (
          <Flex dir="col" gap={2} className="py-20 text-center" justify="center">
            <Inbox className="mx-auto text-slate-300" size={40} />
            <Text color="muted">Nenhum processo público disponível no momento.</Text>
          </Flex>
        )}

        {filtered.map((processo: ProcessoSeletivo) => (
          <Section
            key={processo.id}
            variant="user"
            className="hover:scale-[1.01] transition-transform border border-slate-100 shadow-sm"
          >
            <Flex justify="between" className="flex-wrap gap-4">
              <Flex gap={6} className="flex-wrap">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 shrink-0">
                  <FileText size={24} />
                </div>
                <Flex dir="col" items="start" gap={2}>
                  <Flex gap={2} className="flex-wrap">
                    <Text variant="subtitle">{processo.titulo}</Text>
                    <Span variant="outline" size="xs">
                      {TIPO_LABELS[processo.tipoProcesso ?? ""] ?? processo.tipoProcesso}
                    </Span>
                  </Flex>
                  <Flex gap={4} className="flex-wrap">
                    <Flex gap={2}>
                      <Building2 size={14} className="text-slate-400" />
                      <Text size="sm" color="muted">
                        {processo.instituicao?.nomeFantasia ?? "Instituição"}
                      </Text>
                    </Flex>
                    <Flex gap={2}>
                      <CalendarClock size={14} className="text-slate-400" />
                      <Text size="sm" color="muted">
                        Inscrições até {formatDate(processo.dataFimInscricao)}
                      </Text>
                    </Flex>
                    <Text size="xs" color="muted">
                      Edital nº {processo.numeroEdital}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Button variant="primary" className="rounded-xl shrink-0">
                Candidatar-se
              </Button>
            </Flex>
          </Section>
        ))}
      </div>
    </Section>
  );
};
