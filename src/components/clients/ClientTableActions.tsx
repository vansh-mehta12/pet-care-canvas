
import { Filter, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ClientTableActions() {
  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm">
        <Filter className="mr-2 h-4 w-4" />
        Filter
      </Button>
      <Button variant="outline" size="sm">
        <ArrowUpDown className="mr-2 h-4 w-4" />
        Sort
      </Button>
    </div>
  );
}
