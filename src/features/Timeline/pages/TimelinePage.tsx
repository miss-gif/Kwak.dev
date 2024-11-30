import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Timeline from "../components/Timeline";
import TimelineAnime from "../components/TimelineAnime";

const TimelinePage = () => {
  const props = {
    title: "타임라인",
    subtitle: "✨ 타임라인",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <p className="hidden">
          <Timeline />
        </p>
        <TimelineAnime />
      </SectionWrapper>
    </PageLayout>
  );
};

export default TimelinePage;
