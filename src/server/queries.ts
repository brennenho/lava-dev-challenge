import "server-only";

import { eq } from "drizzle-orm";
import { db } from "./db";
import { inventory } from "./db/schema";

export async function getInventory() {
  const items = await db.query.inventory.findMany({
    orderBy: [inventory.createdAt],
  });

  return items;
}

export async function addInventoryItem(
  name: string,
  img: string,
  value: number,
  pcs: number,
  accent: boolean | null,
) {
  const newItem = await db
    .insert(inventory)
    .values({
      name,
      img,
      value,
      pcs,
      accent,
    })
    .returning();

  return newItem[0];
}

export async function deleteInventoryItem(id: number) {
  await db.delete(inventory).where(eq(inventory.id, id));
}
