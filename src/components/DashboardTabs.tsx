import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { SummaryIcon, LayoutGrid } from "lucide-react";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";

export function DashboardTabs() {

  return (
    <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger value="overview">
          <SummaryIcon className="h-4 w-4"/>Overview
        </TabsTrigger>
        <TabsTrigger value="category">
          <LayoutGrid className="h-4 w-4"/>By Category
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <OverviewCards/>
      </TabsContent>
      <TabsContent value="category">
        <CategoryCards/>
      </TabsContent>
    </Tabs>
  );
}
