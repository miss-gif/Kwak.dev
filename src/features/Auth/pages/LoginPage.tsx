import AuthLabelInput from "@/components/form/LabelInput/AuthLabelInput";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/useLogin";
import { Link } from "react-router-dom";

const test = {
  email: "test1234@naver.com",
  password: "test1234@naver.com",
};

const LoginPage = () => {
  const { email, setEmail, password, setPassword, error, handleLogin } = useLogin({
    initialEmail: test.email,
    initialPassword: test.password,
  });

  const 준비중 = () => {
    alert("준비중입니다.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-md bg-white p-8">
        <h2 className="py-5 text-center text-2xl font-bold text-gray-700">로그인</h2>
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

          <Button type="submit" className="w-full">
            이메일로 로그인
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="space-y-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              준비중();
            }}
          >
            카카오
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              준비중();
            }}
          >
            네이버
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              준비중();
            }}
          >
            구글
          </Button>
        </div>

        <p className="text-center text-sm text-gray-600">
          계정이 없으신가요?
          <Link to="/auth/signup" className="text-blue-500 hover:underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
