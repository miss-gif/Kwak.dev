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
    <table>
      <thead>
        <tr className="h-12 bg-slate-700 font-semibold text-white">
          <th className="text-center text-sm">제목</th>
          <th className="text-center text-sm">작성자</th>
          <th className="min-w-14 text-center text-sm">추천</th>
          <th className="min-w-14 text-center text-sm">비추천</th>
          <th className="min-w-14 text-center text-sm">조회</th>
          <th className="min-w-24 text-center text-sm">작성일</th>
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
                <p className="line-clamp-1">{post.title}</p>
              </td>
              <td className="text-sm tracking-tighter">{post.author}</td>
              <td className="text-center text-sm tracking-tighter text-blue-500">
                {post.likes}
              </td>
              <td className="text-center text-sm tracking-tighter text-red-500">
                {post.dislikes}
              </td>
              <td className="text-center text-sm tracking-tighter">
                {post.views}
              </td>
              <td className="text-center text-sm tracking-tighter">
                {formatDate(post.createdAt)}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default PostTable;
