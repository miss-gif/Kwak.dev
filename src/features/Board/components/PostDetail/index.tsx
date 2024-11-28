import UpDownButton from "@/features/Board/components/UpDownButton";
import UrlCopyButton from "@/features/Board/components/UrlCopyButton";
import { db } from "@/firebaseConfig";
import { handleDislike, handleLike } from "@/utils/utils";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { doc, runTransaction } from "firebase/firestore";
import { useEffect, useState } from "react";
import { PostData } from "../../types/type";

interface PostDetailProps {
  post: PostData;
  postId: string;
}

const PostDetail = ({ post, postId }: PostDetailProps) => {
  const [views, setViews] = useState(post.views);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndUpdateViews = async (postId: string) => {
      if (!postId) return;

      const postRef = doc(db, "posts", postId);

      try {
        const updatedViews = await runTransaction(db, async (transaction) => {
          const postDoc = await transaction.get(postRef);
          if (!postDoc.exists()) {
            throw new Error("Document does not exist!");
          }

          const newViews = (postDoc.data().views || 0) + 1;
          transaction.update(postRef, { views: newViews });
          return newViews;
        });

        setViews(updatedViews);
      } catch (error) {
        console.error("Transaction failed: ", error);
        setError("조회수를 업데이트하는데 문제가 발생했습니다.");
      }
    };

    fetchAndUpdateViews(postId);
  }, [postId]);

  return (
    <div className="w-full rounded-md border border-gray-300 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-3xl font-bold text-gray-800">{post.title}</h3>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">{post.author}</span>
          <div className="flex gap-2 text-gray-500">
            <span>{post.createdAt}</span>
            <span className="flex items-center">조회 {views}</span>
          </div>
        </div>
        <UrlCopyButton />
      </div>
      <div className="mb-6 whitespace-pre-wrap text-gray-700">
        {post.content}
      </div>
      <div className="flex items-center justify-center gap-6 pb-10 pt-20">
        <UpDownButton
          postId={postId}
          onClick={handleLike}
          post={post}
          rule={"likes"}
        >
          <ThumbUpIcon className="mr-1 text-blue-500" />
        </UpDownButton>
        <UpDownButton
          postId={postId}
          onClick={handleDislike}
          post={post}
          rule={"dislikes"}
        >
          <ThumbDownIcon className="mr-1 text-red-500" />
        </UpDownButton>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default PostDetail;
