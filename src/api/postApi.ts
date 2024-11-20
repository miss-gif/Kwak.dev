import { db } from "@/firebaseConfig";
import Posts from "@/types/posts";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

// 게시물 목록 조회
export const getAllPosts = async (): Promise<Posts[]> => {
  try {
    // 쿼리 생성: 'createdAt' 필드를 기준으로 내림차순 정렬
    const postsQuery = query(
      collection(db, "posts"),
      orderBy("createdAt", "desc"),
      limit(20),
    );

    // 쿼리 실행
    const querySnapshot = await getDocs(postsQuery);

    // 쿼리 결과를 Posts 타입으로 변환
    const posts = querySnapshot.docs.map((doc) => ({
      postId: doc.id,
      ...doc.data(),
    })) as Posts[];

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("게시물 목록 조회 실패");
  }
};

// 게시물 상세 조회
export const getPostById = async (postId: string) => {
  const docRef = doc(db, "posts", postId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
};

// 게시물 생성
export const createPost = async (postData: {
  title: string;
  content: string;
  author: string;
}) => {
  try {
    const newPost = {
      ...postData,
      likes: 0,
      dislikes: 0,
      views: 0,
      createdAt: new Date(),
      likedBy: [],
      dislikedBy: [],
    };
    const docRef = await addDoc(collection(db, "posts"), newPost);
    return { id: docRef.id, ...newPost };
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("게시물 생성 실패");
  }
};

// 게시물 수정
export const updatePost = async (
  postId: string,
  updatedData: { title?: string; content?: string; likes?: number },
) => {
  try {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, updatedData);
    return { id: postId, ...updatedData };
  } catch (error) {
    console.error("Error updating post:", error);
    throw new Error("게시물 수정 실패");
  }
};

// 게시물 삭제
export const deletePost = async (postId: string) => {
  try {
    const postRef = doc(db, "posts", postId);
    await deleteDoc(postRef);
    return { message: "게시물 삭제 성공", postId };
  } catch (error) {
    console.error("Error deleting post:", error);
    throw new Error("게시물 삭제 실패");
  }
};

// 게시물 좋아요 API
export const likePost = async (postId: string, userId: string) => {
  try {
    const postRef = doc(db, "posts", postId);
    // 게시물의 likedBy 배열에 사용자의 ID를 추가
    await updateDoc(postRef, {
      likedBy: arrayUnion(userId),
      dislikes: arrayRemove(userId), // 싫어요 취소
    });
    return { message: "게시물에 좋아요 등록 완료" };
  } catch (error) {
    console.error("Error liking post:", error);
    throw new Error("게시물 좋아요 등록 실패");
  }
};

// 게시물 좋아요 취소 API
export const unlikePost = async (postId: string, userId: string) => {
  try {
    const postRef = doc(db, "posts", postId);
    // 게시물의 likedBy 배열에서 사용자의 ID를 제거
    await updateDoc(postRef, {
      likedBy: arrayRemove(userId),
    });
    return { message: "게시물의 좋아요 취소 완료" };
  } catch (error) {
    console.error("Error unliking post:", error);
    throw new Error("게시물 좋아요 취소 실패");
  }
};

// 게시물 싫어요 API
export const dislikePost = async (postId: string, userId: string) => {
  try {
    const postRef = doc(db, "posts", postId);
    // 게시물의 dislikedBy 배열에 사용자의 ID를 추가
    await updateDoc(postRef, {
      dislikedBy: arrayUnion(userId),
      likedBy: arrayRemove(userId), // 좋아요 취소
    });
    return { message: "게시물에 싫어요 등록 완료" };
  } catch (error) {
    console.error("Error disliking post:", error);
    throw new Error("게시물 싫어요 등록 실패");
  }
};

// 게시물 싫어요 취소 API
export const undislikePost = async (postId: string, userId: string) => {
  try {
    const postRef = doc(db, "posts", postId);
    // 게시물의 dislikedBy 배열에서 사용자의 ID를 제거
    await updateDoc(postRef, {
      dislikedBy: arrayRemove(userId),
    });
    return { message: "게시물의 싫어요 취소 완료" };
  } catch (error) {
    console.error("Error undisliking post:", error);
    throw new Error("게시물 싫어요 취소 실패");
  }
};
