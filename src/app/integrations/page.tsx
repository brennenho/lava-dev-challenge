import { Blocks } from "@/components/icons";

export default function IntegrationPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-2">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <Blocks className="h-6 w-6" />
      </div>
      <div className="text-xl font-medium">Integrations</div>
      <div></div>
    </main>
  );
}
