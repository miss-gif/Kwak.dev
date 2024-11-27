import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import PostEdit from "../components/PostEdit";

const PostEditorPage = () => {
  const props = {
    title: "게시글 수정",
    subtitle: "✨ 게시글을 수정하세요",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <PostEdit />
      </SectionWrapper>
    </PageLayout>
  );
};

export default PostEditorPage;
