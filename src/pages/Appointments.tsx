
import { useState } from "react";
import { format } from "date-fns";
import { 
  Calendar as CalendarIcon, ChevronLeft, ChevronRight, 
  Search, Plus, Filter, MoreHorizontal 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Mock data for appointments
const appointments = [
  {
    id: "1",
    time: "09:00 AM - 09:30 AM",
    petName: "Buddy",
    petType: "dog" as const,
    ownerName: "John Smith",
    reason: "Annual checkup and vaccinations",
    status: "confirmed" as const,
  },
  {
    id: "2",
    time: "10:00 AM - 10:30 AM",
    petName: "Luna",
    petType: "cat" as const,
    ownerName: "Emily Johnson",
    reason: "Dental cleaning",
    status: "confirmed" as const,
  },
  {
    id: "3",
    time: "11:00 AM - 11:30 AM",
    petName: "Max",
    petType: "dog" as const,
    ownerName: "Michael Brown",
    reason: "Limping on right front paw",
    status: "confirmed" as const,
  },
  {
    id: "4",
    time: "12:00 PM - 12:30 PM",
    petName: "LUNCH BREAK",
    petType: "other" as const,
    ownerName: "",
    reason: "Staff break",
    status: "break" as const,
  },
  {
    id: "5",
    time: "01:00 PM - 01:30 PM",
    petName: "Charlie",
    petType: "dog" as const,
    ownerName: "David Wilson",
    reason: "Vaccination",
    status: "confirmed" as const,
  },
  {
    id: "6",
    time: "02:00 PM - 02:30 PM",
    petName: "Bella",
    petType: "cat" as const,
    ownerName: "Lisa Miller",
    reason: "Vomiting and lethargy",
    status: "confirmed" as const,
  },
  {
    id: "7",
    time: "03:00 PM - 03:30 PM",
    petName: "Rocky",
    petType: "dog" as const,
    ownerName: "Thomas Garcia",
    reason: "Skin infection follow-up",
    status: "confirmed" as const,
  },
  {
    id: "8",
    time: "04:00 PM - 04:30 PM",
    petName: "Chloe",
    petType: "cat" as const,
    ownerName: "Jennifer Lee",
    reason: "Annual checkup",
    status: "cancelled" as const,
  },
];

export default function Appointments() {
  const [date, setDate] = useState<Date>(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter appointments based on search query
  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.petName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.reason.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Appointments</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
        {/* Calendar sidebar */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-3">
              <div className="flex justify-between items-center py-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h2 className="text-sm font-medium">
                  {format(date, "MMMM yyyy")}
                </h2>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => newDate && setDate(newDate)}
                className="rounded-md border w-full"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Today's Overview</CardTitle>
              <CardDescription>
                {format(date, "EEEE, MMMM do, yyyy")}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Total Appointments</span>
                  <span className="text-sm">7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Confirmed</span>
                  <span className="text-sm">6</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Cancelled</span>
                  <span className="text-sm">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Available Slots</span>
                  <span className="text-sm">3</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Appointments list */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search appointments..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="w-[180px] justify-start">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(date, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => newDate && setDate(newDate)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Schedule</CardTitle>
              <CardDescription>
                {format(date, "EEEE, MMMM do, yyyy")}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0 divide-y">
                {filteredAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className={cn(
                      "flex items-center gap-4 p-4",
                      appointment.status === "break" && "bg-gray-50"
                    )}
                  >
                    <div className="min-w-[120px] text-sm font-medium">
                      {appointment.time}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        {appointment.status !== "break" && (
                          <Avatar className="h-9 w-9 border">
                            <AvatarImage src={`/placeholder.svg`} alt={appointment.petName} />
                            <AvatarFallback>{appointment.petName.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <div className="font-medium flex items-center gap-2">
                            {appointment.petName}
                            {appointment.status !== "break" && (
                              <Badge variant="outline" className="text-xs">
                                {appointment.petType}
                              </Badge>
                            )}
                          </div>
                          {appointment.status !== "break" && (
                            <p className="text-xs text-muted-foreground">
                              Owner: {appointment.ownerName}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground">
                            {appointment.reason}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      {appointment.status === "confirmed" ? (
                        <Badge className="bg-green-100 text-green-800">
                          Confirmed
                        </Badge>
                      ) : appointment.status === "cancelled" ? (
                        <Badge className="bg-red-100 text-red-800">
                          Cancelled
                        </Badge>
                      ) : null}
                    </div>
                    {appointment.status !== "break" && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Appointment</DropdownMenuItem>
                          <DropdownMenuItem>Start Appointment</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            Cancel Appointment
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
