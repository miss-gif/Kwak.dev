import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import UserStats from "@/features/Charts/components/UserStats";
import VisitorsChat from "../components/VisitorsChat";

const ChartsPage = () => {
  const props = {
    title: "통계",
    subtitle: "✨ 사용자 통계를 확인하세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <h3>통계</h3>
        <UserStats />
        <VisitorsChat />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ChartsPage;
