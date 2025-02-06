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
import { usePathname } from "next/navigation";
import React from "react";
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
  {
    title: "Integrations",
    url: "/integrations",
    icon: Blocks,
  },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar
      collapsible="icon"
      // onMouseEnter={() => toggleSidebar()}
      // onMouseLeave={() => toggleSidebar()}
    >
      <SidebarContent className="justify-between bg-gradient-to-b from-[hsla(0,0%,100%,1)] to-[hsla(0,0%,98%,1)] p-3 group-data-[collapsible=icon]:items-center">
        <div>
          <SidebarHeader className="flex flex-row items-center">
            <div className="flex h-9 w-9 items-center justify-center">
              <Image src="/tally.png" alt="Tally Logo" width={28} height={25} />
            </div>
            <div className="text-[20px] font-medium leading-5 text-primary group-data-[collapsible=icon]:hidden">
              Tally
            </div>
          </SidebarHeader>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="gap-2 py-2">
                {items.map((item, i) => (
                  <React.Fragment key={item.title}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        className={`h-9 gap-2 rounded-sm p-1.5 ${item.url === pathname ? "border border-sidebar-border bg-sidebar-primary text-sidebar-foreground" : "text-sidebar-background"}`}
                      >
                        <Link href={item.url}>
                          <item.icon className="h-6 w-6" />
                          <span className="text-[12px]">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    {i === 2 && <Separator />}
                  </React.Fragment>
                ))}
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
              <Link href="/">
                <Icons.dots />
              </Link>
            </div>
          </div>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
