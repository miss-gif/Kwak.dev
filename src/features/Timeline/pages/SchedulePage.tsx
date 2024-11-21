import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Calendar from "@/features/Schedule/pages/Calendar";

const SchedulePage = () => {
  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <Calendar />
      </SectionWrapper>
    </PageLayout>
  );
};

export default SchedulePage;
