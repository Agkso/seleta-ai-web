import { Navbar } from "@/components/layout/navbar";
import { AIChatButton } from "@/components/layout/ai-chat-button";
import { ProcessoList } from "@/features/processos/components/processo-list";

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProcessoList />
      <AIChatButton />
    </main>
  );
}
