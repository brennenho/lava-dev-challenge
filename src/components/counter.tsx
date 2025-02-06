import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface CounterProps {
  value: number;
  pcs: number;
  accent?: boolean;
}

export default function Counter({ value, pcs, accent = false }: CounterProps) {
  const [count, setCount] = useState(value); // set initial value

  return (
    <div className="flex h-12 w-[196px]">
      {/* decrement button */}
      <div
        className="flex w-12 cursor-pointer items-center justify-center rounded-l border-y border-l"
        onClick={() => setCount((prev) => Math.max(0, prev - 1))}
      >
        <Minus className="h-[18px] w-[18px]" />
      </div>

      <div className="flex w-[100px] flex-col font-light">
        <div
          className={`flex h-8 items-center justify-center border-x border-t ${accent ? "border-accent bg-accent-foreground" : ""}`}
        >
          <div className="text-xl">{count}</div>
        </div>
        <div
          className={`flex h-4 items-center justify-center border ${accent ? "border-accent bg-accent text-primary-foreground" : "bg-accent-secondary text-sidebar-background"}`}
        >
          <div className="text-xs">{pcs} PCS</div>
        </div>
      </div>

      {/* increment button */}
      <div
        className="flex w-12 cursor-pointer items-center justify-center rounded-r border-y border-r"
        onClick={() => setCount((prev) => prev + 1)}
      >
        <Plus className="h-[18px] w-[18px]" />
      </div>
    </div>
  );
}
