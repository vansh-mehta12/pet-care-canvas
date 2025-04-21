
import { useState } from "react";
import { 
  Search, Plus, Dog, Cat, Filter, Heart, Calendar,
  FileText, Mail, ArrowUpDown, MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

// Mock data
const patients = [
  {
    id: "1",
    name: "Buddy",
    type: "dog" as const,
    breed: "Golden Retriever",
    age: "4 years",
    gender: "Male",
    owner: "John Smith",
    status: "active" as const,
    lastVisit: "Apr 15, 2023",
  },
  {
    id: "2",
    name: "Luna",
    type: "cat" as const,
    breed: "Maine Coon",
    age: "3 years",
    gender: "Female",
    owner: "Emily Johnson",
    status: "active" as const,
    lastVisit: "Apr 12, 2023",
  },
  {
    id: "3",
    name: "Charlie",
    type: "dog" as const,
    breed: "Beagle",
    age: "2 years",
    gender: "Male",
    owner: "David Wilson",
    status: "inactive" as const,
    lastVisit: "Mar 28, 2023",
  },
  {
    id: "4",
    name: "Bella",
    type: "cat" as const,
    breed: "Siamese",
    age: "5 years",
    gender: "Female",
    owner: "Lisa Miller",
    status: "active" as const,
    lastVisit: "Apr 5, 2023",
  },
  {
    id: "5",
    name: "Max",
    type: "dog" as const,
    breed: "German Shepherd",
    age: "6 years",
    gender: "Male",
    owner: "Michael Brown",
    status: "active" as const,
    lastVisit: "Apr 10, 2023",
  },
  {
    id: "6",
    name: "Chloe",
    type: "cat" as const,
    breed: "Ragdoll",
    age: "2 years",
    gender: "Female",
    owner: "Jennifer Lee",
    status: "inactive" as const,
    lastVisit: "Mar 15, 2023",
  },
  {
    id: "7",
    name: "Rocky",
    type: "dog" as const,
    breed: "Boxer",
    age: "3 years",
    gender: "Male",
    owner: "Thomas Garcia",
    status: "active" as const,
    lastVisit: "Apr 8, 2023",
  },
  {
    id: "8",
    name: "Lucy",
    type: "dog" as const,
    breed: "Labrador Retriever",
    age: "4 years",
    gender: "Female",
    owner: "Patricia Martinez",
    status: "active" as const,
    lastVisit: "Apr 7, 2023",
  },
];

export default function Patients() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter patients based on search query
  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.breed.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Patients</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Patient
        </Button>
      </div>
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search patients..."
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
                <TableHead>Patient</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Age/Gender</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/placeholder.svg" alt={patient.name} />
                        <AvatarFallback>
                          {patient.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {patient.name}
                          {patient.type === "dog" ? (
                            <Dog className="h-3.5 w-3.5 text-vet-purple" />
                          ) : (
                            <Cat className="h-3.5 w-3.5 text-vet-purple" />
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {patient.breed}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{patient.owner}</TableCell>
                  <TableCell>
                    {patient.age} / {patient.gender}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        patient.status === "active"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                      }
                    >
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{patient.lastVisit}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Calendar className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            View Records
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Owner
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            Archive Patient
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
