import { useAuthStore } from "@/components/stores/authStore";
import { postSchema } from "@/schema/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

type PostFormData = z.infer<typeof postSchema>;

const CreatePostPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigator = useNavigate();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user === null) {
      navigator("/login");
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data: PostFormData) => {
    setIsSubmitting(true);
    try {
      // 여기서 API 호출이나 데이터베이스에 게시글 저장
      console.log("게시글 제출:", data);
      // 게시글 저장 후 페이지 이동이나 성공 메시지 추가 가능
      navigator("/board");
    } catch (error) {
      console.error("게시글 제출 실패:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center p-6">
      <h2 className="mb-6 text-2xl font-semibold">새 글 작성</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700">
            제목
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
            placeholder="제목을 입력하세요"
            {...register("title")}
          />
          {errors.title && (
            <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="content" className="block text-gray-700">
            내용
          </label>
          <textarea
            id="content"
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
            placeholder="내용을 입력하세요"
            rows={6}
            {...register("content")}
          />
          {errors.content && (
            <p className="mt-1 text-xs text-red-500">
              {errors.content.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="author" className="block text-gray-700">
            작성자
          </label>
          <input
            type="text"
            id="author"
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
            placeholder="작성자를 입력하세요"
            {...register("author")}
          />
          {errors.author && (
            <p className="mt-1 text-xs text-red-500">{errors.author.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isSubmitting ? "저장 중..." : "글 작성하기"}
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
