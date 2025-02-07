import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function AddItem() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [color, setColor] = useState("");
  const [accent, setAccent] = useState(false);

  async function addItem() {
    try {
      await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: itemName,
          value: parseInt(quantity),
          pcs: 24,
          img: color,
          accent: accent,
        }),
      });
    } catch {
      console.log("Error adding inventory item");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-4 py-[13px]">
          <Plus className="h-2.5 w-2.5" />
          Add New
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New</DialogTitle>
          <DialogDescription>Add an item to the inventory.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Item Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Quantity
            </Label>
            <Input
              id="quantity"
              className="col-span-3"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="color" className="text-right">
              Color
            </Label>
            <Select value={color} onValueChange={setColor}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="/red.png">Red</SelectItem>
                <SelectItem value="/black.png">Black</SelectItem>
                <SelectItem value="/white.png">White</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="accent" className="text-right">
              Highlight
            </Label>
            <Checkbox
              id="accent"
              checked={accent}
              onCheckedChange={(checked) => setAccent(!!checked)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={addItem}>
              Add Item
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
