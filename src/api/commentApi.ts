import { db } from "@/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

// 게시물 댓글 조회 API
export const getComments = async (postId: string) => {
  try {
    const commentsRef = collection(db, "posts", postId, "comments");
    const commentsSnapshot = await getDocs(commentsRef);
    const comments = commentsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw new Error("댓글 조회 실패");
  }
};
// 게시물 댓글 생성 API
export const createComment = async (
  postId: string,
  commentData: { author: string; content: string },
) => {
  try {
    const commentsRef = collection(db, "posts", postId, "comments");
    const newComment = {
      ...commentData,
      createdAt: new Date(),
    };
    const docRef = await addDoc(commentsRef, newComment);
    return { id: docRef.id, ...newComment };
  } catch (error) {
    console.error("Error creating comment:", error);
    throw new Error("댓글 생성 실패");
  }
};
// 게시물 댓글 수정 API
export const updateComment = async (
  postId: string,
  commentId: string,
  updatedData: { content: string },
) => {
  try {
    const commentRef = doc(db, "posts", postId, "comments", commentId);
    await updateDoc(commentRef, updatedData);
    return { id: commentId, ...updatedData };
  } catch (error) {
    console.error("Error updating comment:", error);
    throw new Error("댓글 수정 실패");
  }
};
// 게시물 댓글 삭제 API
export const deleteComment = async (postId: string, commentId: string) => {
  try {
    const commentRef = doc(db, "posts", postId, "comments", commentId);
    await deleteDoc(commentRef);
    return { message: "댓글 삭제 완료", commentId };
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw new Error("댓글 삭제 실패");
  }
};
