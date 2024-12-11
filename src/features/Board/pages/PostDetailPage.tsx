import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import CommentList from "@/features/Board/components/PostDetail/CommentList";
import useGetPosts from "@/hooks/postbody/useGetPosts";
import { useParams } from "react-router-dom";
import PostDetail from "../components/PostDetail";
import PostDetailHeader from "../components/PostDetail/PostDetailHeader";

const PostDetailPage = () => {
  const { postId } = useParams<{ postId: string }>();
  if (!postId) return <p>No postId found</p>;
  const { post, isLoading, error } = useGetPosts(postId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!post) return <p>No post found</p>;

  const props = {
    title: "게시글 상세",
    subtitle: "✨ 게시글을 자세히 확인하세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <PostDetailHeader post={post} postId={postId} />

      <SectionWrapper>
        <div className="flex flex-col py-5">
          <PostDetail post={post} postId={postId} />

          <CommentList postId={postId} />
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default PostDetailPage;
