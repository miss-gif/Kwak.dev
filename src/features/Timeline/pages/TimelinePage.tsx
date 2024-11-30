import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { useState } from "react";
import Timeline from "../components/Timeline";
import TimelineAnime from "../components/TimelineAnime";

const TimelinePage = () => {
  const [showTimeline, setShowTimeline] = useState(true);
  const props = {
    title: "타임라인",
    subtitle: "✨ 타임라인",
  };

  // 버튼 클릭 시 표시되는 컴포넌트 토글
  const toggleTimeline = () => setShowTimeline((prev) => !prev);

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <button onClick={toggleTimeline}>{showTimeline ? "Anime 모드" : "Non Anime 모드"}</button>
        {showTimeline ? <Timeline /> : <TimelineAnime />}
      </SectionWrapper>
    </PageLayout>
  );
};

export default TimelinePage;
