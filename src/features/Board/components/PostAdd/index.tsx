import { createData } from "@/api/firebase-crud-api";
import { useRequireLogin } from "@/hooks/useLoginCheck";
import { postSchema } from "@/schema/validationSchema";
import { useAuthStore } from "@/stores/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import PostHeader from "./PostHeader";
import Button from "@/components/Button";
import StickyBottomSubmit from "@/components/Button/StickyBottomSubmit";

type PostFormData = z.infer<typeof postSchema>;

const PostAdd = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  // useRequireLogin 훅을 사용하여 로그인 상태 확인
  useRequireLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // 입력 값 제어
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  const handleCreateData = async (data: PostFormData) => {
    try {
      // 폼 데이터로 전달된 값으로 업데이트
      const docID = await createData({
        collectionName: "posts",
        formData: data,
      });
      toast.success("프로젝트가 성공적으로 저장되었습니다.");
      navigate(`/post/${docID}`); // 생성된 문서의 고유 ID로 페이지 이동
    } catch (error) {
      toast.error("프로젝트 저장에 실패했습니다. 다시 시도해주세요.");
      console.error(error);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <form
        onSubmit={handleSubmit(handleCreateData)}
        className="w-full space-y-4"
      >
        <PostHeader />
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
            onChange={(e) => setValue("title", e.target.value)} // 입력 값 업데이트
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
            rows={15}
            {...register("content")}
            onChange={(e) => setValue("content", e.target.value)} // 입력 값 업데이트
          />
          {errors.content && (
            <p className="mt-1 text-xs text-red-500">
              {errors.content.message}
            </p>
          )}
        </div>
        <div className="hidden">
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
        <StickyBottomSubmit>
          <Button label="저장하기" width="w-full" mt="mt-4" type="submit" />
        </StickyBottomSubmit>
      </form>
    </div>
  );
};

export default PostAdd;
