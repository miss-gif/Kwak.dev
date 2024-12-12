import { formatDate } from "@/utils/formatDate";
import { useNavigate } from "react-router-dom";
import { PostData } from "../../../types/type";
import Notice from "./Notice";

interface PostTableProps {
  posts: PostData[];
}

const PostTable = ({ posts }: PostTableProps) => {
  const navigate = useNavigate();

  return (
    <table className="w-full">
      {/* sm 사이즈일 때 thead 숨김 처리 */}
      <thead className="hidden sm:table-header-group">
        <tr className="h-12 bg-neutral-600 font-semibold text-white">
          <th className="text-center text-sm">제목</th>
          <th className="text-center text-sm">작성자</th>
          <th className="text-center text-sm">추천</th>
          <th className="text-center text-sm">비추천</th>
          <th className="text-center text-sm">조회</th>
          <th className="text-center text-sm">작성일</th>
        </tr>
      </thead>
      <Notice />
      <tbody>
        {posts.length === 0 ? (
          <tr>
            <td colSpan={6}>게시물이 없습니다.</td>
          </tr>
        ) : (
          posts.map((post) => (
            <tr
              key={post.docID}
              onClick={() => navigate(`/post/${post.docID}`)}
              role="row"
              className="cursor-pointer border-b hover:bg-gray-100"
            >
              <td className="px-2 py-4">
                <p className="line-clamp-1 text-sm">{post.title}</p>
              </td>
              {/* sm 사이즈일 때 숨김 처리 */}
              <td className="hidden text-xs tracking-tighter sm:table-cell">{post.author}</td>
              <td className="text-center text-xs tracking-tighter text-blue-500">{post.likes}</td>
              <td className="text-center text-xs tracking-tighter text-red-500">{post.dislikes}</td>
              <td className="text-center text-xs tracking-tighter">{post.views}</td>
              <td className="min-w-20 text-center text-xs tracking-tighter">{formatDate(post.createdAt)}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default PostTable;
