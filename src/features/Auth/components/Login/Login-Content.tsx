import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { useUserLogin } from "@/hooks/auth/use-UserLogin";
import OtherLogin from "./OtherLogin";

const test = {
  email: "test1234@naver.com",
  password: "test1234@naver.com",
};

const LoginContent = () => {
  const { email, setEmail, password, setPassword, handleLogin, loading } = useUserLogin({
    initialEmail: test.email,
    initialPassword: test.password,
  });

  return (
    <>
      <form onSubmit={handleLogin} className="space-y-4">
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
          {loading ? "로딩 중..." : "이메일로 로그인"}
        </Button>
      </form>

      <OtherLogin />
    </>
  );
};

export default LoginContent;
