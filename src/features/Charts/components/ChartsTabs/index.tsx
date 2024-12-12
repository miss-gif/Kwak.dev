import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserStats from "../UserStats/UserStats";
import VisitorsCharts from "../VisitorsChat/VisitorsCharts";

function ChartsTabs() {
  return (
    <Tabs defaultValue="visitors" className="py-4">
      <TabsList className="grid max-w-[400px] grid-cols-2">
        <TabsTrigger value="visitors">방문자 통계</TabsTrigger>
        {/* <TabsTrigger value="userStats">사용자 통계</TabsTrigger> */}
      </TabsList>

      <TabsContent value="visitors">
        <VisitorsCharts />
      </TabsContent>

      <TabsContent value="userStats">
        <UserStats />
      </TabsContent>
    </Tabs>
  );
}

export default ChartsTabs;
