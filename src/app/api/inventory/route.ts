import { getInventory } from "@/server/queries";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const items = await getInventory();

    return NextResponse.json(items);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch inventory" },
      { status: 500 },
    );
  }
}
