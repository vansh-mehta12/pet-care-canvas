import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClientSearchBar } from "@/components/clients/ClientSearchBar";
import { ClientTableActions } from "@/components/clients/ClientTableActions";
import { ClientTable } from "@/components/clients/ClientTable";

// Mock data moved to a constant
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
        <ClientSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ClientTableActions />
      </div>
      
      <ClientTable clients={filteredClients} />
    </div>
  );
}
