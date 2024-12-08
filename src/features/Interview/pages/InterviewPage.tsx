import PageLayout from "@/components/common/PageLayout";
import Interview from "../components/Interview";

const InterviewPage = () => {
  const props = {
    title: "인터뷰 질문",
    subtitle: "✨ 인터뷰 질문을 확인하세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <Interview />
    </PageLayout>
  );
};

export default InterviewPage;
