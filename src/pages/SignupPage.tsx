import { useSignupAndReturn } from "@/hooks/useLoginCheck";
import { useSignup } from "@/hooks/useSignup";
import { Link } from "react-router-dom";

function SignupPage() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSignup,
  } = useSignup();

  useSignupAndReturn();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-700">
          회원가입
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              사용자 이름
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-full rounded-md border px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-md border px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-md border px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            회원가입
          </button>
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
