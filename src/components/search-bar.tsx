import { Input } from "@/components/ui/input";
import AddItem from "./add-item";
import { Filter, Search, UpDownArrows } from "./icons";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className="flex flex-col justify-between gap-2 px-2 py-[9px] md:flex-row">
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search Materials"
          className="w-full md:w-[360px]"
          icon={<Search className="h-4 w-4" />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-1 py-1.5">
          <Filter className="h-6 w-6 cursor-pointer stroke-sidebar-primary-foreground" />
          <UpDownArrows className="h-6 w-6 cursor-pointer stroke-sidebar-primary-foreground" />
        </div>
      </div>

      <AddItem />
    </div>
  );
}
