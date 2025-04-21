
import { 
  DogIcon, 
  CalendarIcon, 
  PillIcon, 
  UsersIcon 
} from "lucide-react";
import { StatCard } from "@/components/Dashboard/StatCard";
import { AppointmentList } from "@/components/Dashboard/AppointmentList";
import { RecentPatients } from "@/components/Dashboard/RecentPatients";
import { UpcomingActivities } from "@/components/Dashboard/UpcomingActivities";

// Mock data
const todayAppointments = [
  {
    id: "1",
    time: "9:00 AM",
    petName: "Buddy",
    petType: "dog" as const,
    ownerName: "John Smith",
    status: "completed" as const,
    reason: "Annual checkup and vaccinations",
  },
  {
    id: "2",
    time: "10:30 AM",
    petName: "Luna",
    petType: "cat" as const,
    ownerName: "Emily Johnson",
    status: "upcoming" as const,
    reason: "Dental cleaning",
  },
  {
    id: "3",
    time: "1:00 PM",
    petName: "Max",
    petType: "dog" as const,
    ownerName: "Michael Brown",
    status: "upcoming" as const,
    reason: "Limping on right front paw",
  },
  {
    id: "4",
    time: "3:30 PM",
    petName: "Milo",
    petType: "cat" as const,
    ownerName: "Sarah Davis",
    status: "cancelled" as const,
    reason: "Routine checkup",
  },
];

const recentPatients = [
  {
    id: "1",
    name: "Buddy",
    type: "dog" as const,
    breed: "Golden Retriever",
    age: "4 years",
    lastVisit: "Today",
    owner: "John Smith",
  },
  {
    id: "2",
    name: "Luna",
    type: "cat" as const,
    breed: "Maine Coon",
    age: "3 years",
    lastVisit: "Today",
    owner: "Emily Johnson",
  },
  {
    id: "3",
    name: "Charlie",
    type: "dog" as const,
    breed: "Beagle",
    age: "2 years",
    lastVisit: "Yesterday",
    owner: "David Wilson",
  },
  {
    id: "4",
    name: "Bella",
    type: "cat" as const,
    breed: "Siamese",
    age: "5 years",
    lastVisit: "2 days ago",
    owner: "Lisa Miller",
  },
];

const upcomingActivities = [
  {
    id: "1",
    type: "appointment" as const,
    title: "Checkup for Max",
    time: "Tomorrow, 10:00 AM",
    description: "Annual health examination and vaccinations",
  },
  {
    id: "2",
    type: "reminder" as const,
    title: "Call Mrs. Johnson",
    time: "Tomorrow, 2:00 PM",
    description: "Follow up on Luna's medication",
  },
  {
    id: "3",
    type: "medication" as const,
    title: "Prescription Refill",
    time: "Fri, 9:00 AM",
    description: "Prepare medication for Buddy's arthritis",
  },
  {
    id: "4",
    type: "vaccination" as const,
    title: "Vaccine Stock Check",
    time: "Fri, 3:00 PM",
    description: "Inventory and order rabies vaccines",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Welcome back, Dr. Smith! Here's your practice overview.
        </p>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Patients"
          value="248"
          icon={<DogIcon className="h-4 w-4 stroke-[1.5]" />}
          description="+12% from last month"
        />
        <StatCard
          title="Appointments Today"
          value="16"
          icon={<CalendarIcon className="h-4 w-4 stroke-[1.5]" />}
          description="4 completed, 10 upcoming, 2 cancelled"
        />
        <StatCard
          title="Active Treatments"
          value="32"
          icon={<PillIcon className="h-4 w-4 stroke-[1.5]" />}
          description="8 due for renewal this week"
        />
        <StatCard
          title="Total Clients"
          value="187"
          icon={<UsersIcon className="h-4 w-4 stroke-[1.5]" />}
          description="+5 new clients this week"
        />
      </div>
      
      {/* Content sections */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <AppointmentList appointments={todayAppointments} />
          <RecentPatients patients={recentPatients} />
        </div>
        <UpcomingActivities activities={upcomingActivities} />
      </div>
    </div>
  );
}
