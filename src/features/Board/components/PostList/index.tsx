import { PostData } from "../../types/type";

interface PostListProps {
  posts: PostData[];
}

const PostList = ({ posts }: PostListProps) => {
  console.log("posts", posts);

  return <div>PostList</div>;
};

export default PostList;
