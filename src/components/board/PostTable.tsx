import Post from "@/types/post";
import { formatDate } from "@/utils/formatDate";
import { useNavigate } from "react-router-dom";

const PostTable = ({ posts }: { posts: Post[] }) => {
  const navigate = useNavigate();

  return (
    <table className="w-full table-auto border-collapse text-sm">
      <thead>
        <tr className="h-10 border-b-2 bg-gray-700 text-center font-semibold text-white">
          <th>제목</th>
          <th>작성자</th>
          <th>추천</th>
          <th>비추천</th>
          <th>조회</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-10 cursor-pointer border-b bg-gray-300 text-black hover:bg-orange-200">
          <td className="px-4">
            현재 게시판은 작업중입니다. 최대한 빠른 시일 내에 작업을
            완료하겠습니다.
          </td>
          <td>운영자</td>
          <td className="text-center text-blue-500">1</td>
          <td className="text-center text-red-500">1</td>
          <td className="text-center">1</td>
          <td className="text-center text-xs">{formatDate(Date())}</td>
        </tr>
      </tbody>
      <tbody>
        {posts.map((post) => (
          <tr
            key={post.postId}
            className="h-10 cursor-pointer border-b hover:bg-orange-200"
            onClick={() => navigate(`/post/${post.postId}`)}
          >
            <td className="px-4">{post.title}</td>
            <td>{post.author}</td>
            <td className="text-center text-blue-500">{post.likes}</td>
            <td className="text-center text-red-500">{post.dislikes}</td>
            <td className="text-center">{post.views}</td>
            <td className="text-center text-xs">
              {formatDate(post.createdAt)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
