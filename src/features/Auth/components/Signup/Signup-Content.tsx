import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { InputWithLabelButton } from "@/components/ui/InputWithLabelButton";
import { useSignup } from "@/hooks/auth/use-Signup";

const SignupContent = () => {
  const {
    displayName,
    setDisplayName,
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
    handleCheckDisplayName,
    loading,
  } = useSignup();

  return (
    <form onSubmit={handleSignup} className="space-y-4">
      <InputWithLabelButton
        name="displayName"
        label="닉네임"
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
        {loading ? "회원가입 중..." : "회원가입"}
      </Button>
    </form>
  );
};

export default SignupContent;
