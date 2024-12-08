import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Timeline from "../components/Timeline";

const TimelinePage = () => {
  const props = {
    title: "타임라인",
    subtitle: "✨ 타임라인",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="py-10">
          <Timeline />
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default TimelinePage;
