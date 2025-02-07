"use client";

import Image from "next/image";
import Counter from "./counter";

import { useState } from "react";
import SearchBar from "./search-bar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";

interface InventoryItem {
  id: number;
  name: string;
  img: string;
  value: number;
  pcs: number;
  accent: boolean | null;
}

interface InventoryProps {
  inventory: InventoryItem[];
}

export default function Inventory({ inventory }: InventoryProps) {
  const [search, setSearch] = useState("");

  const handleDelete = async (id: number) => {
    try {
      await fetch(`/api/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch {
      console.log("Error deleting inventory item");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <SearchBar search={search} setSearch={setSearch} />
      <div className="flex flex-col gap-1">
        {inventory
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map((item) => (
            <ContextMenu key={item.name}>
              <ContextMenuTrigger className="flex flex-col items-center justify-between gap-2 p-2 md:flex-row">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-sm border ${item.img === "/white.png" ? "bg-muted-secondary" : "bg-primary-foreground"}`}
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={34}
                      height={34}
                    />
                  </div>
                  <div>{item.name}</div>
                </div>
                <Counter
                  value={item.value}
                  pcs={item.pcs}
                  accent={item.accent ?? undefined}
                />
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem onClick={() => handleDelete(item.id)}>
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
      </div>
    </div>
  );
}
