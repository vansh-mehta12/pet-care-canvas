
import { Check, X, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AppointmentStatus = "completed" | "upcoming" | "cancelled";

interface Appointment {
  id: string;
  time: string;
  petName: string;
  petType: "dog" | "cat" | "other";
  ownerName: string;
  status: AppointmentStatus;
  reason: string;
}

interface AppointmentListProps {
  appointments: Appointment[];
}

export function AppointmentList({ appointments }: AppointmentListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Appointments</CardTitle>
        <CardDescription>You have {appointments.length} appointments today</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0 divide-y">
          {appointments.map((appointment) => (
            <AppointmentItem key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function AppointmentItem({ appointment }: { appointment: Appointment }) {
  const statusIcons = {
    completed: <Check className="h-4 w-4" />,
    upcoming: <Clock className="h-4 w-4" />,
    cancelled: <X className="h-4 w-4" />,
  };

  const statusClasses = {
    completed: "bg-green-100 text-green-800 hover:bg-green-200",
    upcoming: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    cancelled: "bg-red-100 text-red-800 hover:bg-red-200",
  };

  return (
    <div className="flex items-center gap-4 p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="text-sm font-medium">{appointment.time}</div>
      </div>
      <Avatar className="h-10 w-10 border">
        <AvatarImage src={`/placeholder.svg`} alt={appointment.petName} />
        <AvatarFallback>{appointment.petName.substring(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium truncate">{appointment.petName}</p>
          <Badge variant="outline" className="text-xs">
            {appointment.petType}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground truncate">
          Owner: {appointment.ownerName}
        </p>
        <p className="text-xs text-muted-foreground truncate">
          {appointment.reason}
        </p>
      </div>
      <Badge
        className={cn(
          "flex items-center gap-1",
          statusClasses[appointment.status]
        )}
      >
        {statusIcons[appointment.status]}
        <span className="capitalize">{appointment.status}</span>
      </Badge>
      <Button variant="ghost" size="sm">
        View
      </Button>
    </div>
  );
}
