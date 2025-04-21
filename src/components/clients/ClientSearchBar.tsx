
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ClientSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function ClientSearchBar({ searchQuery, setSearchQuery }: ClientSearchBarProps) {
  return (
    <div className="relative grow">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search clients..."
        className="pl-9"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
