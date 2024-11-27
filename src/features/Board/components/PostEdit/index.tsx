import Button from "@/components/Button";
import StickyBottomSubmit from "@/components/Button/StickyBottomSubmit";
import { db } from "@/firebaseConfig";
import { useRequireLogin } from "@/hooks/useLoginCheck";
import { postSchema } from "@/schema/validationSchema";
import { useAuthStore } from "@/stores/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import PostHeader from "../PostAdd/PostHeader";

type PostFormData = z.infer<typeof postSchema>;

const PostEdit = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { postId } = useParams(); // URL에서 postId 가져오기

  // 로그인 상태 확인
  useRequireLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      author: user?.email ?? "", // 초기값 설정
      id: 0, // 랜덤 id 값 설정
    },
  });

  useEffect(() => {
    // Firestore에서 기존 게시글 데이터 가져오기
    const fetchPostData = async () => {
      if (!postId) return;
      try {
        const postRef = doc(db, "posts", postId);
        const postSnapshot = await getDoc(postRef);
        if (postSnapshot.exists()) {
          const postData = postSnapshot.data();
          setValue("title", postData.title || "");
          setValue("content", postData.content || "");
          setValue("author", postData.author || user?.email || "");
        } else {
          toast.error("게시글을 찾을 수 없습니다.");
          navigate("/board");
        }
      } catch (error) {
        toast.error("게시글 데이터를 불러오는 중 문제가 발생했습니다.");
      }
    };

    fetchPostData();
  }, [postId, setValue, user?.email, navigate]);

  const onSubmit = async (data: PostFormData) => {
    if (!postId) {
      toast.error("게시글 ID가 유효하지 않습니다.");
      return;
    }

    try {
      // Firestore의 posts 컬렉션에 게시글 업데이트
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        title: data.title,
        content: data.content,
        updatedAt: serverTimestamp(),
      });
      toast.success("게시글이 성공적으로 수정되었습니다.");
      navigate("/board");
    } catch (error) {
      toast.error("게시글 수정에 실패했습니다.");
    }
  };

  return (
    <>
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
              <p className="mt-1 text-xs text-red-500">
                {errors.title.message}
              </p>
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

          <input
            type="hidden"
            {...register("author")}
            value={user?.email ?? ""}
          />
          <input type="hidden" {...register("id")} value="0" />
          <StickyBottomSubmit>
            <Button label="수정하기" width="w-full" mt="mt-4" type="submit" />
          </StickyBottomSubmit>
        </form>
      </div>
    </>
  );
};

export default PostEdit;
