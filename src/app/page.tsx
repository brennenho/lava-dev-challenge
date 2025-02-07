import Inventory from "@/components/inventory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getInventory } from "@/server/queries";

export default async function HomePage() {
  const inventory = await getInventory();
  return (
    <main className="flex min-h-screen w-full flex-col bg-gradient-to-b from-[hsla(0,0%,95%,1)] to-[hsla(0,0%,100%,1)]">
      <div className="px-12 py-9 md:px-[136px]">
        <Tabs defaultValue="inventory">
          {/* header */}
          <div className="flex justify-between">
            <div className="flex gap-2 text-2xl font-medium">
              <div className="">Materials</div>
              <div className="text-secondary-foreground">/ Blanks</div>
            </div>
            <TabsList className="h-[41px] w-[204px]">
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="order-queue">Order Queue</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="inventory">
            <Inventory inventory={inventory} />
          </TabsContent>

          <TabsContent
            value="order-queue"
            className="flex h-60 flex-col items-center justify-center text-lg font-medium"
          >
            Order Queue
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
