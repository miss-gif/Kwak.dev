import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminTab from "../components/AdminTab";
import AdminCharts from "../components/Admin-Charts";

const AdminMainPage = () => {
  const props = {
    title: "Admin",
    subtitle: "✨ 사이트 관리를 담당합니다.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <AdminTab />

        {/* 신규 탭스 */}
        <Tabs defaultValue="charts" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="charts">Charts</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>

          <TabsContent value="charts">
            <AdminCharts />
          </TabsContent>

          <TabsContent value="password">
            <AdminCharts />
          </TabsContent>
        </Tabs>
      </SectionWrapper>
    </PageLayout>
  );
};

export default AdminMainPage;
