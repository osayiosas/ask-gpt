import { auth } from "@/auth";
import { NewChat } from "./new-chat";
import { ProfileButton } from "./profile-button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "./ui/sidebar";
import { redirect } from "next/navigation";

export const AppSidebar = async () => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  if (!session.user) {
    redirect("/");
  }

  const user = session.user;
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <NewChat user={user} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>{/* chat list */}</SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <ProfileButton user={user} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
