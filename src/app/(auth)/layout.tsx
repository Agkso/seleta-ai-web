import { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { Text } from "@/components/ui/text";
import { Span } from "@/components/ui/span";
import { Flex } from "@/components/ui/flex";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen flex bg-white">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-brand-primary text-white">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(16,185,129,0.3), transparent 45%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <Flex dir="col" items="start" justify="between" className="relative z-10 p-14 w-full">
          <Text variant="title" className="text-2xl tracking-tight">
            Seleto<span className="text-emerald-400">AI</span>
          </Text>

          <Flex dir="col" items="start" gap={6} className="max-w-md">
            <Span variant="ia" size="md" className="gap-1.5">
              <Sparkles size={14} />
              Inteligência artificial aplicada
            </Span>
            <Text variant="title" className="normal-case text-4xl leading-tight tracking-tight">
              Licitações e processos seletivos, do edital à contratação.
            </Text>
            <Text size="lg" className="text-slate-300 leading-relaxed">
              Conectamos instituições contratantes a prestadores qualificados, com
              triagem e apoio de IA em cada etapa do processo.
            </Text>
          </Flex>

          <Text size="xs" className="text-slate-500">
            © {new Date().getFullYear()} SeletoAI · Plataforma de licitações e processos seletivos
          </Text>
        </Flex>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-16">{children}</div>
    </main>
  );
}
