// app/portal/page.tsx
import { Flex } from "@/app/_components/flex";
import { Section } from "@/app/_components/section";
import { Text } from "@/app/_components/text";
import { Button } from "@/app/_components/button";
import { Input } from "@/app/_components/input";
import { Navbar } from "@/app/_components/navbar";
import { Search, Clock } from "lucide-react";
import { AIChatButton } from "@/app/_components/button/ai-chat-button";

export default function CandidatoPortal() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Section variant="ghost" className="pt-16">
        <Flex dir="col" gap={2} className="text-center mb-12">
          <Text variant="title" className="normal-case text-4xl tracking-tight">
            Sua carreira pública começa aqui.
          </Text>
          <Text variant="body" color="muted" className="text-lg">
            Processos seletivos com suporte de IA 24/7 para suas dúvidas.
          </Text>
        </Flex>

        <div className="max-w-2xl mx-auto mb-16">
          <Input 
            icon={<Search size={20} />}
            placeholder="Buscar por cargo, cidade ou edital..."
          />
        </div>

        <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
          <Section variant="user" className="hover:scale-[1.01] transition-transform cursor-pointer border border-slate-100 shadow-sm">
            <Flex justify="between">
              <Flex gap={6}>
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                  <Clock size={24} />
                </div>
                <Flex dir="col" items="start">
                  <Text variant="subtitle">Analista Judiciário - TI</Text>
                  <Text size="sm" color="muted">
                    Tribunal Regional • 15 vagas • R$ 8.200,00
                  </Text>
                </Flex>
              </Flex>
              <Button variant="primary" className="rounded-xl">
                Inscrever-se
              </Button>
            </Flex>
          </Section>
        </div>
      </Section>

      <AIChatButton />
    </main>
  );
}