import { z } from "zod";

// Zod 유효성 검사 스키마 정의
export const useSignupSchema = z.object({
  displayName: z.string().min(2, "닉네임은 최소 2자 이상이어야 합니다.").max(30, "닉네임은 최대 16자까지 가능합니다."),
  email: z.string().email("올바른 이메일 형식이 아닙니다."),
  password: z.string().min(4, "비밀번호는 최소 4자 이상이어야 합니다.").max(30, "비밀번호는 최대 16자까지 가능합니다."),
});
