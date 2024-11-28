import Button from "@/components/Button";
import AuthLabelInput from "@/components/form/LabelInput/AuthLabelInput";
import { useLogin } from "@/hooks/useLogin";
import { usePageGuard } from "@/hooks/useLoginCheck";
import { Link } from "react-router-dom";

const test = {
  email: "test1234@naver.com",
  password: "test1234@naver.com",
};

const LoginPage = () => {
  const { email, setEmail, password, setPassword, error, handleLogin } =
    useLogin({
      initialEmail: test.email,
      initialPassword: test.password,
    });

  usePageGuard();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-md bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-700">로그인</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <AuthLabelInput
            type="email"
            label="이메일"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthLabelInput
            type="password"
            label="비밀번호"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button label="로그인" width="w-full" type="submit" py="py-2" />
        </form>
        {error && <p>{error}</p>}
        <p className="text-center text-sm text-gray-600">
          계정이 없으신가요?
          <Link to="/signup" className="text-blue-500 hover:underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
