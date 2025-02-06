import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import "@/styles/globals.css";

import { uncutSans } from "@/lib/fonts";
import { type Metadata } from "next";

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
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
