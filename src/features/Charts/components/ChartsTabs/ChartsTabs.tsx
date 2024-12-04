import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserStats from "../UserStats/UserStats";
import VisitorsCharts from "../VisitorsChat/VisitorsCharts";

export function ChartsTabs() {
  return (
    <Tabs defaultValue="account" className="w-[400px] py-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="사용자">사용자 통계</TabsTrigger>
        <TabsTrigger value="방문자">방문자 통계</TabsTrigger>
      </TabsList>

      <TabsContent value="사용자">
        <UserStats />
      </TabsContent>

      <TabsContent value="방문자">
        <VisitorsCharts />
      </TabsContent>
    </Tabs>
  );
}
