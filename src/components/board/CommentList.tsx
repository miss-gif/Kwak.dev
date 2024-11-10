const CommentList = () => {
  return (
    <div className="mt-8 w-full rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">댓글</h2>
      <div className="space-y-4">
        {/* {comments.map((comment) => (
      <div key={comment.id} className="border-b pb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            {comment.author}
          </span>
          <span className="text-xs text-gray-500">
            {comment.date}
          </span>
        </div>
        <p className="mt-2 text-gray-700">{comment.content}</p>
      </div>
    ))} */}
        댓글
      </div>

      {/* 댓글 입력 폼 */}
      <div className="mt-6">
        <textarea
          placeholder="댓글을 남기세요..."
          className="w-full rounded-md border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          // rows="3"
          // value={newComment}
          // onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="mt-4 flex justify-end">
          <button
            // onClick={handleCommentSubmit}
            className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
          >
            댓글 작성
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
