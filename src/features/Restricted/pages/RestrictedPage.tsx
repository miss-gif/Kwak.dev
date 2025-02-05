import { changeSitePublicState, sitePublicState } from "@/utils/sitePublicState";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // 추가
import { toast } from "react-toastify";

type FormData = {
  code: string;
};

const RestrictedPage = () => {
  const [isPublic, setIsPublic] = useState(false);
  const [submitError, setSubmitError] = useState(""); // 에러 메시지 상태

  const password = "1234"; // 비밀번호

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // 추가

  useEffect(() => {
    const fetchState = async () => {
      const state = await sitePublicState();
      console.log("Public state: ", state);
      setIsPublic(state);
    };
    fetchState();
  }, []);

  useEffect(() => {
    if (isPublic) {
      navigate("/");
    } else {
      console.log("비공개 상태입니다.");
    }
  }, [isPublic]);

  const onSubmit = (data: FormData) => {
    setSubmitError(""); // 에러 초기화
    if (data.code === password) {
      setIsPublic(true);
      changeSitePublicState(true);
    } else {
      setSubmitError("비밀번호가 일치하지 않습니다."); // 에러 메시지 설정
      toast.error("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <p className="mb-4 text-lg font-semibold">{/* ...existing code... */}</p>
        {isPublic ? "현재 공개 상태입니다" : "현재 비공개 상태입니다"}

        <div className="flex flex-col items-center">
          <p className="mb-2">비밀번호 입력</p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
            <input
              type="password"
              placeholder="입장 코드를 입력하세요"
              className="mb-4 rounded border border-gray-300 px-4 py-2"
              {...register("code", { required: "비밀번호를 입력해주세요." })} // 유효성 검사 추가
            />
            {errors.code && <p className="mb-2 text-red-500">{errors.code.message}</p>}
            {submitError && <p className="mb-2 text-red-500">{submitError}</p>}
            <button type="submit" className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700">
              입장하기
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RestrictedPage;
