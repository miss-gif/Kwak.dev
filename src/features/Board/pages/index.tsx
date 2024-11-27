import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import PostListPage from "./PostListPage";

const BoardPage = () => {
  const props = {
    title: "게시판",
    subtitle: "✨ 게시판을 통해 소통하세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="min-h-[40vh] w-full">
          <PostListPage />
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default BoardPage;
