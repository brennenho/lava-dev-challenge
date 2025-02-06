import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";

// sidebar navigation items
const items = [
  {
    title: "Materials",
    url: "/",
    icon: Icons.materials,
  },
  {
    title: "Products",
    url: "/products",
    icon: Icons.products,
  },
  {
    title: "Fulfillment",
    url: "/fulfillment",
    icon: Icons.fulfillment,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="p-3 group-data-[collapsible=icon]:items-center">
        <SidebarHeader className="flex flex-row items-center">
          <div className="flex h-9 w-9 items-center justify-center">
            <Image src="/tally.png" alt="Tally Logo" width={28} height={25} />
          </div>
          <div className="text-primary text-lg font-medium group-data-[collapsible=icon]:hidden">
            Tally
          </div>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2 py-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-9 gap-2 p-1.5">
                    <Link href={item.url}>
                      <item.icon className="h-6 w-6" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
