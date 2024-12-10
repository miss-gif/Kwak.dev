import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserStats from "../UserStats/UserStats";
import VisitorsCharts from "../VisitorsChat/VisitorsCharts";

function ChartsTabs() {
  return (
    <Tabs defaultValue="userStats" className="py-4">
      <TabsList className="grid w-[400px] grid-cols-2">
        <TabsTrigger value="userStats">사용자 통계</TabsTrigger>
        <TabsTrigger value="visitors">방문자 통계</TabsTrigger>
      </TabsList>

      <TabsContent value="userStats">
        <UserStats />
      </TabsContent>

      <TabsContent value="visitors">
        <VisitorsCharts />
      </TabsContent>
    </Tabs>
  );
}

export default ChartsTabs;
