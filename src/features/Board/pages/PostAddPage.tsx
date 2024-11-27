import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import PostAdd from "../components/PostAdd";

const PostAddPage = () => {
  const props = {
    title: "게시글 작성",
    subtitle: "✨ 새로운 게시글을 작성하세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <PostAdd />
      </SectionWrapper>
    </PageLayout>
  );
};

export default PostAddPage;
