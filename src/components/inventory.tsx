"use client";

import Image from "next/image";
import Counter from "./counter";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import SearchBar from "./search-bar";
import { Spinner } from "./spinner";
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

async function fetchInventory(): Promise<InventoryItem[]> {
  const response = await fetch("/api/inventory");
  if (!response.ok) {
    throw new Error("Error fetching inventory");
  }
  return response.json();
}

export default function Inventory() {
  const [search, setSearch] = useState("");
  const queryClient = useQueryClient();

  const {
    data: inventory = [],
    isLoading,
    isError,
  } = useQuery<InventoryItem[]>({
    queryKey: ["inventory"],
    queryFn: fetchInventory,
  });

  const handleDelete = async (id: number) => {
    try {
      await fetch(`/api/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      await queryClient.invalidateQueries({ queryKey: ["inventory"] });
    } catch {
      console.log("Error deleting inventory item");
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching inventory</div>;
  }

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
