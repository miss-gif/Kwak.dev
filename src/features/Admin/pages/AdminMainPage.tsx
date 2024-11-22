import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import AdminTab from "../components/AdminTab";

const AdminMainPage = () => {
  const props = {
    title: "Admin",
    subtitle: "✨ 사이트 관리를 담당합니다.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <AdminTab />
      </SectionWrapper>
    </PageLayout>
  );
};

export default AdminMainPage;
