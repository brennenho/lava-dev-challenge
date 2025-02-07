import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import "@/styles/globals.css";

import { Toaster } from "@/components/ui/toaster";
import { uncutSans } from "@/lib/fonts";
import { type Metadata } from "next";
import { QueryProvider } from "./providers";

export const metadata: Metadata = {
  title: "Tally",
  description:
    "Inventory management that streamlines fulfillment for made-to-order small businesses",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={uncutSans.className}>
      <body>
        <QueryProvider>
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            {children}
          </SidebarProvider>
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
