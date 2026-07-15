import Link from "next/link";
import { FileText, ShieldCheck, Sparkles, Building2, Users, ArrowRight } from "lucide-react";
import { Text } from "@/components/ui/text";
import { Span } from "@/components/ui/span";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flex } from "@/components/ui/flex";
import { Section } from "@/components/ui/section";

const FEATURES = [
  {
    icon: FileText,
    title: "Editais centralizados",
    description: "Publique e acompanhe processos seletivos e licitatórios em um único lugar.",
  },
  {
    icon: Sparkles,
    title: "IA em cada etapa",
    description: "Triagem, respostas a dúvidas e insights automáticos sobre cada processo.",
  },
  {
    icon: ShieldCheck,
    title: "Rastreabilidade",
    description: "Ciclo de vida claro — publicado, em andamento, encerrado ou cancelado.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b px-8 py-4 flex justify-between items-center bg-slate-50/50 backdrop-blur-md sticky top-0 z-50">
        <Text variant="title" color="secondary" className="text-2xl">
          SeletoAI
        </Text>
        <Flex gap={4}>
          <Link href="/login">
            <Button variant="outline" size="md" className="rounded-full">
              Entrar
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="secondary" size="md" className="rounded-full">
              Cadastrar
            </Button>
          </Link>
        </Flex>
      </nav>

      <div className="relative overflow-hidden bg-brand-primary text-white">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(37,99,235,0.35), transparent 40%), radial-gradient(circle at 85% 60%, rgba(16,185,129,0.3), transparent 45%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <Section variant="ghost" fullWidth className="relative z-10 py-28 text-white">
          <Flex dir="col" items="start" gap={6} className="max-w-3xl mx-auto text-center sm:items-center px-6">
            <Span variant="ia" size="md" className="gap-1.5">
              <Sparkles size={14} />
              Licitações e processos seletivos com IA
            </Span>
            <Text variant="title" className="normal-case text-4xl sm:text-5xl leading-tight tracking-tight">
              Do edital à contratação, com inteligência artificial em cada etapa.
            </Text>
            <Text size="lg" className="text-slate-300 leading-relaxed max-w-xl">
              SeletoAI conecta instituições contratantes a prestadores qualificados,
              simplificando publicação de editais, inscrições e análise de resultados.
            </Text>
            <Flex gap={4} className="mt-2 flex-wrap justify-center">
              <Link href="/register">
                <Button variant="secondary" size="lg" className="rounded-2xl normal-case font-bold tracking-normal">
                  Começar agora
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl normal-case font-bold tracking-normal border-white/20 text-white hover:bg-white/10"
                >
                  Já tenho conta
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Section>
      </div>

      <Section variant="ghost" className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {FEATURES.map((feature) => (
            <Card key={feature.title} variant="elevated">
              <Flex dir="col" items="start" gap={2}>
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                  <feature.icon size={22} />
                </div>
                <Text variant="subtitle">{feature.title}</Text>
                <Text size="base" color="muted">
                  {feature.description}
                </Text>
              </Flex>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card variant="flat">
            <Flex dir="col" items="start" gap={2}>
              <div className="p-3 bg-white rounded-2xl text-brand-secondary shadow-sm">
                <Building2 size={22} />
              </div>
              <Text variant="subtitle">Sou contratante</Text>
              <Text size="base" color="muted">
                Publique processos, defina cargos e acompanhe métricas de inscrição e
                aprovação em tempo real.
              </Text>
            </Flex>
          </Card>
          <Card variant="flat">
            <Flex dir="col" items="start" gap={2}>
              <div className="p-3 bg-white rounded-2xl text-brand-success shadow-sm">
                <Users size={22} />
              </div>
              <Text variant="subtitle">Sou prestador</Text>
              <Text size="base" color="muted">
                Encontre editais abertos, candidate-se e receba apoio de IA para
                tirar dúvidas sobre cada processo.
              </Text>
            </Flex>
          </Card>
        </div>
      </Section>
    </main>
  );
}
