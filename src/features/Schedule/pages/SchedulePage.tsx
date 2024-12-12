import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Calendar from "@/features/Schedule/components/Calendar";

const SchedulePage = () => {
  const props = {
    title: "출석체크",
    subtitle: "✨ 오늘의 일정을 확인하고 출석체크를 해주세요! ",
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
