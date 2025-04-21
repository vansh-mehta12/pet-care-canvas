
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MessageCircle, Pill, Syringe } from "lucide-react";

// Activity types
type ActivityType = "appointment" | "reminder" | "medication" | "vaccination" | "message";

interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  time: string;
  description?: string;
}

interface UpcomingActivitiesProps {
  activities: Activity[];
}

export function UpcomingActivities({ activities }: UpcomingActivitiesProps) {
  // Activity type icons
  const activityIcons: Record<ActivityType, React.ReactNode> = {
    appointment: <Calendar className="h-4 w-4" />,
    reminder: <Clock className="h-4 w-4" />,
    medication: <Pill className="h-4 w-4" />,
    vaccination: <Syringe className="h-4 w-4" />,
    message: <MessageCircle className="h-4 w-4" />,
  };

  // Activity type colors
  const activityColors: Record<ActivityType, string> = {
    appointment: "bg-blue-100 text-blue-800",
    reminder: "bg-yellow-100 text-yellow-800",
    medication: "bg-purple-100 text-purple-800",
    vaccination: "bg-green-100 text-green-800",
    message: "bg-gray-100 text-gray-800",
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Activities</CardTitle>
        <CardDescription>Your schedule for the next few days</CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-7 border-l border-dashed border-muted" />
          <ul className="space-y-6 relative">
            {activities.map((activity) => (
              <li key={activity.id} className="relative pl-9">
                <div className="absolute left-0 flex h-14 w-14 items-center justify-center">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full ${activityColors[activity.type]}`}>
                    {activityIcons[activity.type]}
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium">{activity.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {activity.time}
                    </Badge>
                  </div>
                  {activity.description && (
                    <p className="text-xs text-muted-foreground">
                      {activity.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
