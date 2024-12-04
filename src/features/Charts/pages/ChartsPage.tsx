import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { ChartsTabs } from "../components/ChartsTabs/ChartsTabs";

const ChartsPage = () => {
  const props = {
    title: "통계",
    subtitle: "✨ 사용자 통계를 확인하세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <ChartsTabs />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ChartsPage;
