"use client";

import Image from "next/image";
import Counter from "./counter";

import inventory from "@/data/inventory.json";
import { useState } from "react";
import SearchBar from "./search-bar";

export default function Inventory() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-3">
      <SearchBar search={search} setSearch={setSearch} />
      <div className="flex flex-col gap-1">
        {inventory
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map((item) => (
            <div className="flex justify-between p-2" key={item.name}>
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
              <Counter value={item.value} pcs={item.pcs} accent={item.accent} />
            </div>
          ))}
      </div>
    </div>
  );
}
