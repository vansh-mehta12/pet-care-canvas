
import { useState } from "react";
import { 
  Search, Filter, FileText, Dog, Cat, 
  MoreHorizontal, Download, Printer, Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Mock data
const medicalRecords = [
  {
    id: "1",
    title: "Annual Checkup",
    date: "Apr 15, 2023",
    petName: "Buddy",
    petType: "dog" as const,
    ownerName: "John Smith",
    veterinarian: "Dr. Johnson",
    recordType: "examination" as const,
    summary: "Regular annual checkup. All vitals normal. Vaccines updated.",
    details: "Weight: 28kg, Temperature: 38.5°C, Heart Rate: 90 bpm, Respiratory Rate: 20 rpm",
  },
  {
    id: "2",
    title: "Dental Cleaning",
    date: "Apr 12, 2023",
    petName: "Luna",
    petType: "cat" as const,
    ownerName: "Emily Johnson",
    veterinarian: "Dr. Smith",
    recordType: "procedure" as const,
    summary: "Complete dental cleaning performed. Mild gingivitis noted.",
    details: "Procedure performed under anesthesia. Two teeth extracted due to advanced decay. Recovery normal.",
  },
  {
    id: "3",
    title: "Vaccination",
    date: "Mar 28, 2023",
    petName: "Charlie",
    petType: "dog" as const,
    ownerName: "David Wilson",
    veterinarian: "Dr. Roberts",
    recordType: "vaccination" as const,
    summary: "Rabies and DHPP vaccines administered.",
    details: "No adverse reactions observed. Next vaccination due in 1 year.",
  },
  {
    id: "4",
    title: "Wellness Exam",
    date: "Apr 5, 2023",
    petName: "Bella",
    petType: "cat" as const,
    ownerName: "Lisa Miller",
    veterinarian: "Dr. Johnson",
    recordType: "examination" as const,
    summary: "Routine wellness examination. Mild skin irritation noted.",
    details: "Weight: 4.2kg, Temperature: 38.3°C, Heart Rate: 140 bpm, Respiratory Rate: 25 rpm. Prescribed medicated shampoo for skin irritation.",
  },
  {
    id: "5",
    title: "X-Ray",
    date: "Apr 10, 2023",
    petName: "Max",
    petType: "dog" as const,
    ownerName: "Michael Brown",
    veterinarian: "Dr. Thompson",
    recordType: "diagnostic" as const,
    summary: "X-ray of right front leg. Mild arthritic changes observed.",
    details: "X-ray shows mild degenerative joint disease in right elbow. Recommended joint supplement and moderate exercise.",
  },
  {
    id: "6",
    title: "Blood Work",
    date: "Mar 15, 2023",
    petName: "Chloe",
    petType: "cat" as const,
    ownerName: "Jennifer Lee",
    veterinarian: "Dr. Smith",
    recordType: "diagnostic" as const,
    summary: "Complete blood count and chemistry panel. All values within normal limits.",
    details: "Blood work performed as part of senior wellness screening. Recommend rechecking in 6 months.",
  },
  {
    id: "7",
    title: "Skin Infection Treatment",
    date: "Apr 8, 2023",
    petName: "Rocky",
    petType: "dog" as const,
    ownerName: "Thomas Garcia",
    veterinarian: "Dr. Roberts",
    recordType: "treatment" as const,
    summary: "Follow-up for skin infection. Showing improvement with antibiotics.",
    details: "Hot spot on back has reduced in size and appears less inflamed. Continue antibiotics for 7 more days.",
  },
];

export default function MedicalRecords() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecord, setSelectedRecord] = useState<typeof medicalRecords[0] | null>(null);
  
  // Filter records based on search query
  const filteredRecords = medicalRecords.filter(
    (record) =>
      record.petName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Medical Records</h1>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_400px]">
        {/* Records list */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative grow">
              <div className="flex items-center gap-4 rounded-full bg-white px-6 h-search-bar shadow-sm ring-1 ring-gray-200">
                <input
                  placeholder="Search records..."
                  className="flex-1 border-0 bg-transparent text-base text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="h-6 w-[1px] bg-gray-200" />
                <button className="text-gray-500 hover:text-gray-600">Date Range</button>
                <Search className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>All Records</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0 divide-y">
                {filteredRecords.map((record) => (
                  <div
                    key={record.id}
                    className="flex items-center gap-4 p-4 cursor-pointer hover:bg-muted/50"
                    onClick={() => setSelectedRecord(record)}
                  >
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-medium truncate">{record.title}</h4>
                        <Badge
                          variant="outline"
                          className={
                            record.recordType === "examination"
                              ? "bg-blue-100 text-blue-800"
                              : record.recordType === "procedure"
                              ? "bg-purple-100 text-purple-800"
                              : record.recordType === "vaccination"
                              ? "bg-green-100 text-green-800"
                              : record.recordType === "diagnostic"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }
                        >
                          {record.recordType}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {record.summary}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          {record.petType === "dog" ? (
                            <Dog className="h-3 w-3 text-muted-foreground" />
                          ) : (
                            <Cat className="h-3 w-3 text-muted-foreground" />
                          )}
                          <span className="text-xs text-muted-foreground">
                            {record.petName}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">
                          {record.date}
                        </span>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => setSelectedRecord(record)}>
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit Record</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Printer className="mr-2 h-4 w-4" />
                          Print
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Record details panel */}
        <div>
          {selectedRecord ? (
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{selectedRecord.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {selectedRecord.date}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Record</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Printer className="mr-2 h-4 w-4" />
                        Print
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Avatar className="h-10 w-10 border">
                      <AvatarImage src="/placeholder.svg" alt={selectedRecord.petName} />
                      <AvatarFallback>{selectedRecord.petName.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{selectedRecord.petName}</h4>
                        <Badge variant="outline" className="text-xs">
                          {selectedRecord.petType}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Owner: {selectedRecord.ownerName}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Veterinarian:</span>
                      <span>{selectedRecord.veterinarian}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Record Type:</span>
                      <Badge
                        variant="outline"
                        className={
                          selectedRecord.recordType === "examination"
                            ? "bg-blue-100 text-blue-800"
                            : selectedRecord.recordType === "procedure"
                            ? "bg-purple-100 text-purple-800"
                            : selectedRecord.recordType === "vaccination"
                            ? "bg-green-100 text-green-800"
                            : selectedRecord.recordType === "diagnostic"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }
                      >
                        {selectedRecord.recordType}
                      </Badge>
                    </div>
                  </div>
                  
                  <Tabs defaultValue="summary">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="summary">Summary</TabsTrigger>
                      <TabsTrigger value="details">Details</TabsTrigger>
                    </TabsList>
                    <TabsContent value="summary" className="mt-4">
                      <p className="text-sm">{selectedRecord.summary}</p>
                    </TabsContent>
                    <TabsContent value="details" className="mt-4">
                      <p className="text-sm whitespace-pre-line">{selectedRecord.details}</p>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="pt-4 flex justify-between">
                    <Button variant="outline" size="sm">
                      <Printer className="mr-2 h-4 w-4" />
                      Print
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center min-h-[400px] text-center p-6">
                <FileText className="h-16 w-16 text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-medium mb-2">No Record Selected</h3>
                <p className="text-sm text-muted-foreground max-w-[300px]">
                  Select a medical record from the list to view its details here.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
