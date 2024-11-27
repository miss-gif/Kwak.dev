import { readData } from "@/api/firebase-crud-api";
import { LinkButton } from "@/components/Button";
import StickyWrapper from "@/components/common/StickyWrapper";
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

  console.log("posts", posts);

  return (
    <div>
      <StickyWrapper>
        <input
          type="text"
          className="search-input-style"
          placeholder="제목으로 검색"
        />
        <LinkButton label="글쓰기" to="/post/write" />
      </StickyWrapper>

      <PostList posts={posts} />
      {/* <PostTable posts={posts} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!hasMore && !loading && (
        <p className="mt-4 text-gray-500">더 이상 게시물이 없습니다.</p>
      )} */}
      {/* <div ref={ref}></div> */}
    </div>
  );
};

export default PostListPage;
