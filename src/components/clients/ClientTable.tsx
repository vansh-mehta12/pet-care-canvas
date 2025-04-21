
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { ClientTableRow } from "./ClientTableRow";

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

interface ClientTableProps {
  clients: Client[];
}

export function ClientTable({ clients }: ClientTableProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Pets</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <ClientTableRow key={client.id} client={client} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
