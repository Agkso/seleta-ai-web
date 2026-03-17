import { MessageCircle } from "lucide-react";
import { Tooltip } from "../../tooltip";
import { Button } from "..";

export const AIChatButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Tooltip content="Dúvidas sobre o edital? Pergunte à IA" position="top">
        <div className="relative">
          <Button 
            variant="secondary" 
            className="w-16 h-16 rounded-3xl shadow-2xl p-0 hover:rotate-12 transition-all duration-300 border-4 border-white"
          >
            <MessageCircle size={32} fill="currentColor" />
          </Button>

          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-sm"></span>
          </span>
        </div>
      </Tooltip>
    </div>
  );
};