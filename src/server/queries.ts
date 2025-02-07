import "server-only";

import { db } from "./db";

export async function getInventory() {
  const inventory = await db.query.inventory.findMany();

  return inventory;
}
