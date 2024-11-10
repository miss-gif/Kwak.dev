import { db } from "@/firebaseConfig";
import { doc, increment, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

/**
 * 주어진 문자열의 첫 글자를 대문자로 변환합니다.
 *
 * @param string - 변환할 문자열
 * @returns 첫 글자가 대문자인 문자열
 */
export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * 게시글을 좋아요합니다.
 *
 * @param postId - 좋아요할 게시글 ID
 *
 */

export const handleLike = async (postId: string) => {
  const postRef = doc(db, "posts", postId);
  await updateDoc(postRef, { likes: increment(1) });
  toast.success("추천되었습니다.");
};

/**
 *
 * @param postId - 비추천할 게시글 ID
 */

export const handleDislike = async (postId: string) => {
  const postRef = doc(db, "posts", postId);
  await updateDoc(postRef, { dislikes: increment(1) });
  toast.success("비추천되었습니다.");
};
