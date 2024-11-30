import { Comment } from "@/features/Board/types/type";
import { db } from "@/firebaseConfig";
import { useAuthStore } from "@/stores/authStore";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
  where,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";

interface useCommentProps {
  postId: string;
}

const useComment = ({ postId }: useCommentProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  const [replyContent, setReplyContent] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const { user } = useAuthStore();

  // 댓글 조회
  useEffect(() => {
    const commentsRef = collection(db, "posts", postId, "comments");
    const unsubscribe = onSnapshot(commentsRef, (snapshot) => {
      const updatedComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Comment[];
      setComments(updatedComments);
    });
    return () => unsubscribe();
  }, [postId]);

  // 댓글 생성
  const handleCreateComment = async (parentId: string | null = null) => {
    if (!newComment.trim() && !replyContent.trim()) return;

    const commentsRef = collection(db, "posts", postId, "comments");
    const commentData = {
      author: user?.displayName,
      content: parentId ? replyContent : newComment,
      uid: user?.uid,
      createdAt: new Date(),
      updatedAt: new Date(),
      parentId,
      isPrivate: false,
    };

    await addDoc(commentsRef, commentData);
    parentId ? setReplyContent("") : setNewComment("");
    setReplyTo(null);
  };

  // 댓글 수정
  const handleUpdateComment = async (commentId: string) => {
    const commentRef = doc(db, "posts", postId, "comments", commentId);

    await updateDoc(commentRef, {
      content: editContent,
      updatedAt: new Date(),
    });

    setEditingComment(null);
    setEditContent("");
  };

  // 댓글 삭제
  const handleDeleteComment = async (commentId: string) => {
    const commentRef = doc(db, "posts", postId, "comments", commentId);
    const commentSnap = await getDoc(commentRef);

    if (!commentSnap.exists() || commentSnap.data().uid !== user?.uid) {
      alert("삭제 권한이 없습니다.");
      return;
    }

    // 답글 존재 여부 확인
    const repliesQuery = query(
      collection(db, "posts", postId, "comments"),
      where("parentId", "==", commentId),
    );
    const repliesSnap = await getDocs(repliesQuery);

    if (repliesSnap.empty) {
      // 답글이 없으면 댓글 삭제
      await deleteDoc(commentRef);
    } else {
      // 답글이 있으면 비공개 처리
      await updateDoc(commentRef, { isPrivate: true });
    }
  };

  return {
    comments,
    newComment,
    setNewComment,
    editingComment,
    setEditingComment,
    editContent,
    setEditContent,
    replyContent,
    setReplyContent,
    replyTo,
    setReplyTo,
    handleCreateComment,
    handleUpdateComment,
    handleDeleteComment,
  };
};

export default useComment;
