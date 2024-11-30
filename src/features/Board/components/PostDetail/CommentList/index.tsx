import Button from "@/components/Button";
import useComment from "@/features/Board/hooks/use-Comment";
import { useAuthStore } from "@/stores/authStore";
import { formatDate } from "@/utils/formatDate";

interface CommentListProps {
  postId: string;
}

const CommentList = ({ postId }: CommentListProps) => {
  const {
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
  } = useComment({ postId });
  const { user } = useAuthStore();

  return (
    <div className="mt-8 w-full rounded-md border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">댓글</h2>
      <div className="space-y-4">
        {comments
          .filter((c) => c.parentId === null)
          .map((comment) => (
            <div key={comment.id} className="border-b pb-4">
              <div className="flex items-center justify-between bg-slate-50">
                <span className="text-sm text-gray-600">{comment.author}</span>
                <div className="오른쪽 flex items-center gap-1">
                  {comment.createdAt == comment.updatedAt ? (
                    <span className="text-xs text-gray-500">
                      {formatDate(comment.createdAt)}
                    </span>
                  ) : (
                    <p className="text-xs text-gray-500">
                      <span className="px-1">수정됨</span>
                      {formatDate(comment.updatedAt)}
                    </p>
                  )}
                  {comment.uid === user?.uid && (
                    <div className="flex gap-1">
                      <Button
                        label="수정"
                        onClick={() => {
                          setEditingComment(comment.id);
                          setEditContent(comment.content);
                        }}
                      />
                      <Button
                        label="삭제"
                        color="red"
                        onClick={() => {
                          handleDeleteComment(comment.id);
                        }}
                      />
                    </div>
                  )}
                  <Button label="답글" onClick={() => setReplyTo(comment.id)} />
                </div>
              </div>
              {editingComment === comment.id ? (
                <div>
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="mt-2 w-full rounded-md border p-2"
                  />
                  <div className="flex gap-1">
                    <Button
                      label="저장"
                      onClick={() => handleUpdateComment(comment.id)}
                    />
                    <Button
                      label="취소"
                      onClick={() => setEditingComment(null)}
                      color="red"
                    />
                  </div>
                </div>
              ) : (
                <>
                  {/* 댓글 삭제된 경우 표시 */}
                  {!comment.isPrivate ? (
                    <p className="mt-2 text-gray-700">{comment.content}</p>
                  ) : (
                    <p className="mt-2 italic text-gray-400">
                      삭제된 댓글입니다.
                    </p>
                  )}
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
                        {formatDate(reply.createdAt)}
                      </span>
                    </div>
                    {editingComment === reply.id ? (
                      <div>
                        <textarea
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          className="mt-2 w-full rounded-md border p-2"
                        />
                        <div className="mt-2 flex space-x-2">
                          <button
                            className="text-blue-500"
                            onClick={() => handleUpdateComment(reply.id)}
                          >
                            저장
                          </button>
                          <button
                            className="text-red-500"
                            onClick={() => {
                              setEditingComment(null);
                              setEditContent("");
                            }}
                          >
                            취소
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
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
                              답글 수정
                            </button>
                            <button
                              className="text-red-500"
                              onClick={() => handleDeleteComment(reply.id)}
                            >
                              답글 삭제
                            </button>
                          </div>
                        )}
                      </>
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
