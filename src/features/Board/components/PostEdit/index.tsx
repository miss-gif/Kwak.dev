import Button from "@/components/Button";
import StickyBottomSubmit from "@/components/Button/StickyBottomSubmit";
import { db } from "@/firebaseConfig";
import { postSchema } from "@/schema/validationSchema";
import { useAuthStore } from "@/stores/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import PostHeader from "../PostAdd/PostHeader";

type PostFormData = z.infer<typeof postSchema>;

const PostEdit = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { postId } = useParams();
  const [content, setContent] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      author: user?.displayName ?? "",
      id: 0,
      uid: user?.uid ?? "",
      createdAt: new Date().toISOString(),
    },
  });

  useEffect(() => {
    const fetchPostData = async () => {
      if (!postId) return;
      try {
        const postRef = doc(db, "posts", postId);
        const postSnapshot = await getDoc(postRef);
        if (postSnapshot.exists()) {
          const postData = postSnapshot.data();
          setValue("title", postData.title || "");
          setValue("content", postData.content || "");
          setValue("author", postData.author || user?.displayName || "");
          setContent(postData.content || ""); // ReactQuill의 초기값 설정
        } else {
          toast.error("게시글을 찾을 수 없습니다.");
          navigate("/board");
        }
      } catch (error) {
        toast.error("게시글 데이터를 불러오는 중 문제가 발생했습니다.");
      }
    };

    fetchPostData();
  }, [postId, setValue, navigate, user?.displayName]);

  const onSubmit = async (data: PostFormData) => {
    if (!postId) {
      toast.error("게시글 ID가 유효하지 않습니다.");
      return;
    }

    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        title: data.title,
        content: content, // ReactQuill의 상태 값 사용
        updatedAt: serverTimestamp(),
      });
      toast.success("게시글이 성공적으로 수정되었습니다.");
      navigate("/board");
    } catch (error) {
      toast.error("게시글 수정에 실패했습니다.");
      console.error(error);
    }
  };

  const handleContentChange = (value: string) => {
    setContent(value);
    setValue("content", value); // react-hook-form 동기화
  };

  return (
    <div className="flex w-full flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        <PostHeader label="게시글 수정" />

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
          <ReactQuill value={content} onChange={handleContentChange} />

          {errors.content && (
            <p className="mt-1 text-xs text-red-500">
              {errors.content.message}
            </p>
          )}
        </div>

        <StickyBottomSubmit>
          <Button label="수정하기" width="w-full" mt="mt-4" type="submit" />
        </StickyBottomSubmit>
      </form>
    </div>
  );
};

export default PostEdit;
