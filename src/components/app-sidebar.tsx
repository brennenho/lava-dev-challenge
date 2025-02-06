"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Blocks, LogOut, ReceiptText, Shapes, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

// sidebar navigation items
const items = [
  {
    title: "Materials",
    url: "/",
    icon: Shapes,
  },
  {
    title: "Products",
    url: "/products",
    icon: Tag,
  },
  {
    title: "Fulfillment",
    url: "/fulfillment",
    icon: ReceiptText,
  },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      // onMouseEnter={() => toggleSidebar()}
      // onMouseLeave={() => toggleSidebar()}
    >
      <SidebarContent className="justify-between p-3 group-data-[collapsible=icon]:items-center">
        <div>
          <SidebarHeader className="flex flex-row items-center">
            <div className="flex h-9 w-9 items-center justify-center">
              <Image src="/tally.png" alt="Tally Logo" width={28} height={25} />
            </div>
            <div className="text-primary text-[20px] font-medium leading-5 group-data-[collapsible=icon]:hidden">
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
                        <span className="text-[12px]">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <Separator />
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="h-9 gap-2 p-1.5">
                    <Link href="/integrations">
                      <Blocks className="h-6 w-6" />
                      <span className="text-[12px]">Integrations</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
        <SidebarFooter className="group-data-[collapsible=icon]:items-center">
          <div>
            <Button variant="destructive" className="w-full justify-start p-0">
              <div className="flex h-9 w-9 items-center justify-center">
                <LogOut />
              </div>
              <div className="text-xs group-data-[collapsible=icon]:hidden">
                Logout
              </div>
            </Button>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Avatar>
              <AvatarImage src="/profile.png" />
              <AvatarFallback>PC</AvatarFallback>
            </Avatar>
            <div className="flex w-full flex-row items-center justify-between group-data-[collapsible=icon]:hidden">
              <div className="flex flex-col gap-1">
                <div className="text-xs font-medium leading-none">
                  Don't Ruin It
                </div>
                <div className="text-[10px] leading-none">Pro Crafter</div>
              </div>
              <div className="cursor-pointer">
                <Icons.dots />
              </div>
            </div>
          </div>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
