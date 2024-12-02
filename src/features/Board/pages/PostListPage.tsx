import { readData } from "@/api/firebase-post-api";
import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import { PostData } from "../types/type";

const PostListPage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const postData = await readData<PostData>({
          collectionName: "posts",
        });
        setPosts(postData);
      } catch (error) {
        console.error("게시물 불러오기 실패", error);
      }
    };
    loadPosts();
  }, []);

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default PostListPage;
