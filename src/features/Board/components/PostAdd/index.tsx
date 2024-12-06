import { createData } from "@/api/firebase-crud-api";
import Button from "@/components/Button";
import StickyBottomSubmit from "@/components/Button/StickyBottomSubmit";
import { postSchema } from "@/schema/validation-Schema";
import { useAuthStore } from "@/stores/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import PostHeader from "./PostHeader";

type PostFormData = z.infer<typeof postSchema>;

const PostAdd = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [content, setContent] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      author: user?.displayName ?? "",
      id: 0,
      uid: user?.uid ?? "",
      createdAt: new Date().toISOString(),
    },
  });

  // ReactQuill의 onChange 핸들러
  const handleContentChange = (value: string) => {
    setContent(value); // ReactQuill의 상태 업데이트
    setValue("content", value); // react-hook-form과 동기화
  };

  const handleCreateData = async (data: PostFormData) => {
    try {
      const docID = await createData({
        collectionName: "posts",
        formData: { ...data, content }, // content를 포함하여 전송
      });
      toast.success("프로젝트가 성공적으로 저장되었습니다.");
      navigate(`/post/${docID}`);
    } catch (error) {
      toast.error("프로젝트 저장에 실패했습니다. 다시 시도해주세요.");
      console.error(error);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <form onSubmit={handleSubmit(handleCreateData)} className="w-full space-y-4">
        <PostHeader label="새 글 작성" />
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
          {errors.title && <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>}
        </div>
        <div>
          <label htmlFor="content" className="block text-gray-700">
            내용
          </label>
          <ReactQuill value={content} onChange={handleContentChange} className="mb-12 h-96" />

          {errors.content && <p className="mt-1 text-xs text-red-500">{errors.content.message}</p>}
        </div>

        <input type="hidden" {...register("author")} value={user?.email ?? ""} />
        <input type="hidden" {...register("id")} value="0" />
        <StickyBottomSubmit>
          <Button label="작성하기" width="w-full" mt="mt-4" type="submit" />
        </StickyBottomSubmit>
      </form>
    </div>
  );
};

export default PostAdd;
