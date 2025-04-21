
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dog, Cat } from "lucide-react";

interface Patient {
  id: string;
  name: string;
  type: "dog" | "cat" | "other";
  breed: string;
  age: string;
  lastVisit: string;
  owner: string;
}

interface RecentPatientsProps {
  patients: Patient[];
}

export function RecentPatients({ patients }: RecentPatientsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Patients</CardTitle>
        <CardDescription>
          Your recently treated patients
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0 divide-y">
          {patients.map((patient) => (
            <div key={patient.id} className="flex items-center gap-4 p-4">
              <Avatar className="h-10 w-10 border">
                <AvatarImage src={`/placeholder.svg`} alt={patient.name} />
                <AvatarFallback>{patient.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium truncate">{patient.name}</p>
                  <Badge variant="outline" className="text-xs flex items-center gap-1">
                    {patient.type === "dog" ? (
                      <Dog className="h-3 w-3" />
                    ) : patient.type === "cat" ? (
                      <Cat className="h-3 w-3" />
                    ) : null}
                    <span className="capitalize">{patient.type}</span>
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {patient.breed}, {patient.age}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xs text-muted-foreground">
                    Owner: <span className="font-medium">{patient.owner}</span>
                  </p>
                  <span className="text-xs text-muted-foreground">•</span>
                  <p className="text-xs text-muted-foreground">
                    Last visit: <span className="font-medium">{patient.lastVisit}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
