import { PostData } from "../../types/type";
import PostTable from "./PostTable";

interface PostListProps {
  posts: PostData[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <>
      <PostTable posts={posts} />
      {/* {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!hasMore && !loading && (
        <p className="mt-4 text-gray-500">더 이상 게시물이 없습니다.</p>
      )} */}
      {/* <div ref={ref}></div> */}
    </>
  );
};

export default PostList;
