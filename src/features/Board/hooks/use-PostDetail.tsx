import { db } from "@/firebaseConfig";
import {
  arrayUnion,
  doc,
  getDoc,
  increment,
  runTransaction,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PostData } from "../types/type";

interface PostDetailProps {
  post: PostData;
  postId: string;
}

const usePostDetail = ({ post, postId }: PostDetailProps) => {
  const [views, setViews] = useState(post.views);
  const [error, setError] = useState<string | null>(null);

  // 게시글 추천 처리 함수
  const handleLike = async (postId: string, uid: string) => {
    const postRef = doc(db, "posts", postId);

    try {
      // 게시글 데이터 가져오기
      const postSnap = await getDoc(postRef);

      if (!postSnap.exists()) {
        toast.error("게시글을 찾을 수 없습니다.");
        return;
      }

      // likedBy 배열 확인
      const postData = postSnap.data();
      const likedBy = postData?.likedBy || []; // likedBy가 없으면 빈 배열로 처리

      if (likedBy.includes(uid)) {
        // 이미 추천한 경우
        toast.error("이미 추천하셨습니다.");
        return;
      }

      // 추천 처리
      await updateDoc(postRef, {
        likes: increment(1), // likes 필드 증가
        likedBy: arrayUnion(uid), // likedBy 배열에 uid 추가
      });

      toast.success("추천되었습니다.");
    } catch (error) {
      console.error("추천 처리 중 오류:", error);
      toast.error("추천 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  // 게시글 비추천 처리 함수
  const handleDislike = async (postId: string, uid: string) => {
    const postRef = doc(db, "posts", postId);

    try {
      // 게시글 데이터 가져오기
      const postSnap = await getDoc(postRef);

      if (!postSnap.exists()) {
        toast.error("게시글을 찾을 수 없습니다.");
        return;
      }

      // dislikes 배열 확인
      const postData = postSnap.data();
      const dislikedBy = postData?.dislikedBy || []; // dislikes가 없으면 빈 배열로 처리

      if (dislikedBy.includes(uid)) {
        // 이미 추천한 경우
        toast.error("이미 비추천하셨습니다.");
        return;
      }

      // 비추천 처리
      await updateDoc(postRef, {
        dislikes: increment(1), // dislikes 필드 증가
        dislikedBy: arrayUnion(uid), // dislikedBy 배열에 uid 추가
      });
      toast.success("비추천되었습니다.");
    } catch (error) {
      console.error("비추천 처리 중 오류:", error);
      toast.error("비추천 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  // 게시글 조회수를 업데이트하는 함수
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

  return { views, error, handleLike, handleDislike };
};

export default usePostDetail;
