import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { useUserLogin } from "@/hooks/auth/use-UserLogin";

const test = {
  email: "test1234@naver.com",
  password: "test1234@naver.com",
};

const PasswordLogin = () => {
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
          {loading ? "로그인 중..." : "로그인"}
        </Button>
      </form>
    </>
  );
};

export default PasswordLogin;
