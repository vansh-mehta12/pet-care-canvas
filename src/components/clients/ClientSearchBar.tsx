
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ClientSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function ClientSearchBar({ searchQuery, setSearchQuery }: ClientSearchBarProps) {
  return (
    <div className="relative w-full max-w-xl">
      <div className="flex h-10 items-center gap-4 rounded-full bg-white px-6 shadow-sm ring-1 ring-gray-200">
        <input
          placeholder="Search"
          className="flex-1 border-0 bg-transparent text-base text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="h-6 w-[1px] bg-gray-200" />
        <button className="text-gray-500 hover:text-gray-600">Date Range</button>
        <Search className="h-5 w-5 text-blue-500" />
      </div>
    </div>
  );
}
