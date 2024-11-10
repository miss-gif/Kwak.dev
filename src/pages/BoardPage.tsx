import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { useAuthStore } from "@/components/stores/authStore";
import useFetchPosts from "@/hooks/useFetchPosts";
import { useNavigate } from "react-router-dom";

const BoardPage = () => {
  const { posts, error } = useFetchPosts();
  const { user } = useAuthStore();
  const navigate = useNavigate();

  if (error) {
    return <div>{error}</div>;
  }

  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="mx-auto max-w-3xl p-6">
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-gray-100">
                    <th className="px-4 py-2 text-center font-semibold text-gray-700">
                      제목
                    </th>
                    <th className="px-4 py-2 text-center font-semibold text-gray-700">
                      작성자
                    </th>
                    <th className="px-4 py-2 text-center font-semibold text-gray-700">
                      추천
                    </th>
                    <th className="px-4 py-2 text-center font-semibold text-gray-700">
                      비추천
                    </th>
                    <th className="px-4 py-2 text-center font-semibold text-gray-700">
                      조회
                    </th>
                    <th className="px-4 py-2 text-center font-semibold text-gray-700">
                      작성일
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr
                      key={post.postId}
                      className="cursor-pointer border-b hover:bg-orange-200"
                      onClick={() => {
                        navigate(`/post/${post.postId}`);
                      }}
                    >
                      <td className="px-4 py-3">
                        <h2 className="">{post.title}</h2>
                      </td>
                      <td className="px-4 py-3">{post.author}</td>
                      <td className="px-4 py-3 text-center text-blue-500">
                        {post.likes}
                      </td>
                      <td className="px-4 py-3 text-center text-red-500">
                        {post.dislikes}
                      </td>
                      <td className="px-4 py-3 text-center">{post.views}</td>
                      <td className="px-4 py-3 text-xs text-gray-500">
                        {post.createdAt.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <button
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => {
              !user ? alert("로그인이 필요합니다.") : navigate("/post/write");
            }}
          >
            글쓰기
          </button>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default BoardPage;
