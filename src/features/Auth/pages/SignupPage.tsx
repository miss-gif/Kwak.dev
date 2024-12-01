import Button from "@/components/Button";
import AuthLabelInput from "@/components/form/LabelInput/AuthLabelInput";
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
        <h2 className="text-center text-2xl font-bold text-gray-700">회원가입</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <AuthLabelInput
            name="displayName"
            label="사용자 이름"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            checkBox={true}
            checkLabel="중복확인"
            checkFunc={handleCheckDisplayName}
          />
          <AuthLabelInput name="email" label="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <AuthLabelInput name="password" label="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button label="회원가입" width="w-full" type="submit" py="py-2" />
        </form>
        <p className="text-center text-sm text-gray-600">
          이미 계정이 있으신가요?
          <Link to="/login" className="text-blue-500 hover:underline">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
