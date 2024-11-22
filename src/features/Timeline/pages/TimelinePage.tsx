import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Calendar from "@/features/Schedule/pages/Calendar";

const TimelinePage = () => {
  const props = {
    title: "일정",
    subtitle: "✨ 일정을 확인하세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <Calendar />
      </SectionWrapper>
    </PageLayout>
  );
};

export default TimelinePage;
