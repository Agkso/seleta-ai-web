import { Button } from "../button";
import { Flex } from "../flex";
import { Text } from "../text";

export const Navbar = () => {
  return (
    <nav className="border-b px-8 py-4 flex justify-between items-center bg-slate-50/50 backdrop-blur-md sticky top-0 z-50">
      <Text variant="title" color="secondary" className="text-2xl">
        SeletoAI
      </Text>
      <Flex gap={4}>
        <Text variant="body" className="cursor-pointer hover:text-brand-secondary transition font-medium">
          Editais Abertos
        </Text>
        <Text variant="body" className="cursor-pointer hover:text-brand-secondary transition font-medium">
          Meus Recursos
        </Text>
        <Button variant="secondary" size="sm" className="rounded-full">
          Área do Candidato
        </Button>
      </Flex>
    </nav>
  );
};