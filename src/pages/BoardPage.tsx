import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { db } from "@/firebaseConfig";
import useFetchPosts from "@/hooks/useFetchPosts";
import { doc, increment, updateDoc } from "firebase/firestore";

const BoardPage = () => {
  const { posts, error } = useFetchPosts();

  const handleLike = async (postId: string) => {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, { likes: increment(1) });
  };

  const handleDislike = async (postId: string) => {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, { dislikes: increment(1) });
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <PageLayout title="게시판">
      <SectionWrapper>
        <div className="mx-auto max-w-3xl p-6">
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-gray-100">
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      번호
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      제목
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      작성자
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      추천
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      비추천
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      조회
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      작성일
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.postId} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">{post.number}</td>
                      <td className="px-4 py-3">
                        <h2 className="text-lg font-semibold">{post.title}</h2>
                      </td>
                      <td className="px-4 py-3">{post.author}</td>
                      <td className="px-4 py-3">
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          onClick={() => handleLike(post.postId)}
                        >
                          👍 {post.likes}
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDislike(post.postId)}
                        >
                          👎 {post.dislikes}
                        </button>
                      </td>
                      <td className="px-4 py-3">{post.views}</td>
                      <td className="px-4 py-3 text-xs text-gray-500">
                        {post.createdAt.toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            글쓰기
          </button>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default BoardPage;
