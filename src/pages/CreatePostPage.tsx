import { useAuthStore } from "@/components/stores/authStore";
import { db } from "@/firebaseConfig";
import useLoginCheck from "@/hooks/useLoginCheck";
import { postSchema } from "@/schema/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

type PostFormData = z.infer<typeof postSchema>;

const CreatePostPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuthStore();

  // useLoginCheck 훅을 사용하여 로그인 상태 확인
  useLoginCheck();

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
      // Firestore의 posts 컬렉션에 게시글 저장
      await addDoc(collection(db, "posts"), {
        title: data.title,
        content: data.content,
        author: user?.email || "Anonymous",
        likes: 0,
        dislikes: 0,
        views: 0,
        createdAt: serverTimestamp(),
        likedBy: [],
        dislikedBy: [],
      });
      toast.success("게시글이 성공적으로 저장되었습니다.");
      navigate("/board");
    } catch (error) {
      toast.error("게시글 저장에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (confirm("작성을 취소하시겠습니까?")) {
      navigate("/board");
    } else {
      return;
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
            value={"테스트 제목1"}
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
            value={"테스트 내용1"}
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
            value={user?.email ?? ""}
            readOnly
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
      <button
        type="submit"
        className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
        onClick={handleCancel}
      >
        취소
      </button>
    </div>
  );
};

export default CreatePostPage;
