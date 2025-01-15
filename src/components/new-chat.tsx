import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarMenuButton } from "./ui/sidebar";

export const NewChat = () => {
  return (
    <SidebarMenuButton className="bg-gray-800 text-white" asChild>
      <Button variant="outline" className="w-full">
        <PlusIcon size="mr-2 size-4" /> New Chat
      </Button>
    </SidebarMenuButton>
  );
};
