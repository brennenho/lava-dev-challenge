import { addInventoryItem } from "@/server/queries";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const ItemSchema = z.object({
  name: z.string(),
  img: z.string(),
  value: z.number(),
  pcs: z.number(),
  accent: z.boolean().nullable(),
});

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as z.infer<typeof ItemSchema>;
    const result = ItemSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Invalid request body" },
        { status: 400 },
      );
    }

    const { name, img, value, pcs, accent } = result.data;
    await addInventoryItem(name, img, value, pcs, accent);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Unable to add inventory item" },
      { status: 500 },
    );
  }
}
