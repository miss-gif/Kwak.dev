import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { useAuthStore } from "@/components/stores/authStore";
import { db } from "@/firebaseConfig";
import { useRequireLogin } from "@/hooks/useLoginCheck";
import { postSchema } from "@/schema/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

type PostFormData = z.infer<typeof postSchema>;

const PostEditorPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { postId } = useParams(); // URL에서 postId 가져오기

  // 로그인 상태 확인
  useRequireLogin();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
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
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [postId, setValue, user?.email, navigate]);

  const onSubmit = async (data: PostFormData) => {
    if (!postId) {
      toast.error("게시글 ID가 유효하지 않습니다.");
      return;
    }
    setIsSubmitting(true);
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
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (confirm("작성을 취소하시겠습니까?")) {
      navigate("/board");
      toast.error("수정이 취소되었습니다.");
    }
  };

  const props = {
    title: "게시글 수정",
    subtitle: "✨ 게시글을 수정하세요",
  };

  if (loading) {
    return (
      <PageLayout title={props.title} subtitle={props.subtitle}>
        <SectionWrapper>
          <p>로딩 중...</p>
        </SectionWrapper>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <div className="flex w-full flex-col">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            <div className="mb-3 flex justify-between border-b border-black py-3">
              <h2 className="text-left text-2xl font-semibold">게시글 수정</h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                  onClick={handleCancel}
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  {isSubmitting ? "저장 중..." : "수정"}
                </button>
              </div>
            </div>
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

            <div>
              <label htmlFor="author" className="block text-gray-700">
                작성자
              </label>
              <input
                type="text"
                id="author"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                value={user?.email ?? ""}
                readOnly
              />
            </div>
          </form>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default PostEditorPage;
