import { db } from "@/firebaseConfig";
import { useAuthStore } from "@/stores/authStore";
import { formatDate } from "@/utils/formatDate";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  parentId: string | null;
  uid: string;
}

interface CommentListProps {
  postId: string;
}

const CommentList = ({ postId }: CommentListProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  const [replyContent, setReplyContent] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const { user } = useAuthStore();

  // Fetch comments
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

  // Create comment
  const handleCreateComment = async (parentId: string | null = null) => {
    if (!newComment.trim() && !replyContent.trim()) return;
    const commentsRef = collection(db, "posts", postId, "comments");
    const commentData = {
      author: user?.displayName,
      content: parentId ? replyContent : newComment,
      uid: user?.uid,
      date: new Date(),
      parentId,
    };
    await addDoc(commentsRef, commentData);
    parentId ? setReplyContent("") : setNewComment("");
    setReplyTo(null);
  };

  // Update comment
  const handleUpdateComment = async (commentId: string) => {
    const commentRef = doc(db, "posts", postId, "comments", commentId);
    await updateDoc(commentRef, { content: editContent, date: new Date() });
    setEditingComment(null);
    setEditContent("");
  };

  // Delete comment
  const handleDeleteComment = async (commentId: string) => {
    const commentRef = doc(db, "posts", postId, "comments", commentId);
    const commentSnap = await getDoc(commentRef);
    if (!commentSnap.exists() || commentSnap.data().uid !== user?.uid) {
      alert("삭제 권한이 없습니다.");
      return;
    }
    await deleteDoc(commentRef);
  };

  return (
    <div className="mt-8 w-full rounded-md border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">댓글</h2>
      <div className="space-y-4">
        {comments
          .filter((c) => c.parentId === null)
          .map((comment) => (
            <div key={comment.id} className="border-b pb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{comment.author}</span>
                <span className="text-xs text-gray-500">
                  {formatDate(comment.date)}
                </span>
              </div>
              {editingComment === comment.id ? (
                <div>
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="mt-2 w-full rounded-md border p-2"
                  />
                  <button
                    className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                    onClick={() => handleUpdateComment(comment.id)}
                  >
                    저장
                  </button>
                  <button
                    className="ml-2 mt-2 rounded-md bg-gray-300 px-4 py-2"
                    onClick={() => setEditingComment(null)}
                  >
                    취소
                  </button>
                </div>
              ) : (
                <>
                  <p className="mt-2 text-gray-700">{comment.content}</p>
                  {comment.uid === user?.uid && (
                    <div className="flex space-x-2">
                      <button
                        className="text-blue-500"
                        onClick={() => {
                          setEditingComment(comment.id);
                          setEditContent(comment.content);
                        }}
                      >
                        수정
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteComment(comment.id)}
                      >
                        삭제
                      </button>
                    </div>
                  )}
                  <button
                    className="text-gray-500"
                    onClick={() => setReplyTo(comment.id)}
                  >
                    답글
                  </button>
                </>
              )}
              {/* Render replies */}
              {comments
                .filter((reply) => reply.parentId === comment.id)
                .map((reply) => (
                  <div key={reply.id} className="ml-6 mt-4 border-l pl-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {reply.author}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatDate(reply.date)}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-700">{reply.content}</p>
                    {reply.uid === user?.uid && (
                      <div className="flex space-x-2">
                        <button
                          className="text-blue-500"
                          onClick={() => {
                            setEditingComment(reply.id);
                            setEditContent(reply.content);
                          }}
                        >
                          수정
                        </button>
                        <button
                          className="text-red-500"
                          onClick={() => handleDeleteComment(reply.id)}
                        >
                          삭제
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              {/* Reply input */}
              {replyTo === comment.id && (
                <div className="mt-4">
                  <textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="답글을 작성하세요..."
                    className="w-full rounded-md border p-2"
                  />
                  <button
                    className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                    onClick={() => handleCreateComment(comment.id)}
                  >
                    답글 작성
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className="mt-6">
        <textarea
          placeholder="댓글을 남기세요..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full rounded-md border p-4 focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
        <div className="mt-4 flex justify-end">
          <button
            className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
            onClick={() => handleCreateComment(null)}
          >
            댓글 작성
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
