
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Dog, Cat, Calendar, Users, ClipboardList,
  Home, Menu, X, Settings, LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="mr-2 lg:hidden"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <div className="flex items-center">
            <Dog className="h-8 w-8 text-vet-purple mr-2" />
            <span className="text-xl font-bold text-vet-purple">VetCare</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Dr. Smith</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    drsmith@vetcare.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={cn(
            "bg-white border-r w-64 p-4 flex flex-col transition-all duration-300 ease-in-out",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
            "fixed lg:static h-full z-20"
          )}
        >
          <nav className="space-y-1 flex-1">
            <SidebarLink to="/" icon={<Home />} label="Dashboard" />
            <SidebarLink to="/patients" icon={<Dog />} label="Patients" />
            <SidebarLink to="/appointments" icon={<Calendar />} label="Appointments" />
            <SidebarLink to="/clients" icon={<Users />} label="Clients" />
            <SidebarLink to="/records" icon={<ClipboardList />} label="Medical Records" />
          </nav>
          
          <div className="pt-4 border-t">
            <div className="bg-vet-purple-light p-3 rounded-lg">
              <p className="text-sm font-medium">Need help?</p>
              <p className="text-xs text-vet-purple-dark">Check our documentation</p>
              <Button size="sm" variant="default" className="mt-2 w-full">
                View Docs
              </Button>
            </div>
          </div>
        </aside>
        
        {/* Backdrop for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-10 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Main Content */}
        <main className={cn(
          "flex-1 p-4 transition-all duration-300 ease-in-out",
          sidebarOpen ? "lg:ml-0" : "lg:ml-0"
        )}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// Sidebar Link Component
function SidebarLink({ 
  to, 
  icon, 
  label 
}: { 
  to: string; 
  icon: React.ReactNode; 
  label: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center py-2 px-3 text-sm rounded-md gap-3 hover:bg-vet-purple-light hover:text-vet-purple-dark transition",
        location.pathname === to ? "bg-vet-purple-light text-vet-purple-dark font-medium" : "text-gray-700"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
