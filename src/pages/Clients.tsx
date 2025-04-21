import { useState } from "react";
import { 
  Search, Plus, Filter, ArrowUpDown, MoreHorizontal,
  Mail, Phone, MapPin, FileText, User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Mock data
const clients = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, CA",
    petCount: 2,
    lastVisit: "Apr 15, 2023",
    status: "active" as const,
  },
  {
    id: "2",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phone: "(555) 234-5678",
    address: "456 Oak Ave, Somecity, NY",
    petCount: 1,
    lastVisit: "Apr 12, 2023",
    status: "active" as const,
  },
  {
    id: "3",
    name: "David Wilson",
    email: "david.wilson@example.com",
    phone: "(555) 345-6789",
    address: "789 Pine Rd, Anothercity, TX",
    petCount: 1,
    lastVisit: "Mar 28, 2023",
    status: "inactive" as const,
  },
  {
    id: "4",
    name: "Lisa Miller",
    email: "lisa.miller@example.com",
    phone: "(555) 456-7890",
    address: "321 Elm Blvd, Newtown, FL",
    petCount: 3,
    lastVisit: "Apr 5, 2023",
    status: "active" as const,
  },
  {
    id: "5",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "(555) 567-8901",
    address: "654 Cedar Ln, Oldcity, WA",
    petCount: 1,
    lastVisit: "Apr 10, 2023",
    status: "active" as const,
  },
  {
    id: "6",
    name: "Jennifer Lee",
    email: "jennifer.lee@example.com",
    phone: "(555) 678-9012",
    address: "987 Birch Ct, Smalltown, OR",
    petCount: 2,
    lastVisit: "Mar 15, 2023",
    status: "inactive" as const,
  },
  {
    id: "7",
    name: "Thomas Garcia",
    email: "thomas.garcia@example.com",
    phone: "(555) 789-0123",
    address: "135 Maple Dr, Bigcity, IL",
    petCount: 1,
    lastVisit: "Apr 8, 2023",
    status: "active" as const,
  },
];

export default function Clients() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter clients based on search query
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Clients</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search clients..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
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
      </div>
      
      {/* Table view */}
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
              {filteredClients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/placeholder.svg" alt={client.name} />
                        <AvatarFallback>
                          {client.name.substring(0, 2)}
                        </AvatarFallback>
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
                      <span className="text-sm truncate max-w-[200px]">
                        {client.address}
                      </span>
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
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
