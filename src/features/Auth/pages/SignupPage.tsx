import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { InputWithLabelButton } from "@/components/ui/InputWithLabelButton";
import { useSignup } from "@/hooks/useSignup";
import { Link } from "react-router-dom";

function SignupPage() {
  const {
    displayName,
    setDisplayName,
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
    handleCheckDisplayName, // 닉네임 중복 확인 버튼 기능
  } = useSignup();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-md bg-white p-8">
        <h2 className="py-5 text-center text-2xl font-bold text-gray-700">회원가입</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <InputWithLabelButton
            name="displayName"
            label="사용자 이름"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            checkBox={true}
            checkLabel="중복확인"
            checkFunc={handleCheckDisplayName}
          />

          <InputWithLabel
            label="이메일"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputWithLabel
            label="비밀번호"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-full">
            회원가입
          </Button>
        </form>
        <p className="text-center text-sm text-gray-600">
          이미 계정이 있으신가요?
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
