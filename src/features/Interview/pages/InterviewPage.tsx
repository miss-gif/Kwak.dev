import PageLayout from "@/components/common/PageLayout";
import Interview from "../components/Interview";

const InterviewPage = () => {
  const props = {
    title: "인터뷰",
    subtitle: "✨ 면접에서 자주 나온 질문에 대한 답변을 정리했습니다. ✨",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <Interview />
    </PageLayout>
  );
};

export default InterviewPage;
