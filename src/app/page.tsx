import SearchBar from "@/components/search-bar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-gradient-to-b from-[hsla(0,0%,95%,1)] to-[hsla(0,0%,100%,1)]">
      <div className="px-[136px] py-9">
        <Tabs defaultValue="inventory">
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
          <TabsContent value="inventory" className="flex flex-col gap-3">
            <SearchBar />
            <div className="flex flex-col gap-1"></div>
          </TabsContent>
          <TabsContent value="order-queue">Order Queue</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
