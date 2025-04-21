
import { Mail, Phone, MapPin, FileText, User, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  petCount: number;
  lastVisit: string;
  status: "active" | "inactive";
}

interface ClientTableRowProps {
  client: Client;
}

export function ClientTableRow({ client }: ClientTableRowProps) {
  return (
    <TableRow key={client.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg" alt={client.name} />
            <AvatarFallback>{client.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="font-medium">{client.name}</div>
        </div>
      </TableCell>
      <TableCell>
        <div className="text-sm">
          <div className="flex items-center gap-1">
            <Mail className="h-3.5 w-3.5 text-muted-foreground" />
            <span>{client.email}</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <Phone className="h-3.5 w-3.5 text-muted-foreground" />
            <span>{client.phone}</span>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-sm truncate max-w-[200px]">{client.address}</span>
        </div>
      </TableCell>
      <TableCell>
        <Badge>{client.petCount}</Badge>
      </TableCell>
      <TableCell>{client.lastVisit}</TableCell>
      <TableCell>
        <Badge
          variant="outline"
          className={
            client.status === "active"
              ? "bg-green-100 text-green-800 hover:bg-green-100"
              : "bg-gray-100 text-gray-800 hover:bg-gray-100"
          }
        >
          {client.status}
        </Badge>
      </TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <FileText className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
