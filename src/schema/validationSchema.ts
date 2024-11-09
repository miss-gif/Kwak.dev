// validationSchema.ts
import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "이름을 입력해 주세요."),
  email: z.string().email("유효한 이메일 주소를 입력해 주세요."),
  message: z.string().min(1, "메시지를 입력해 주세요."),
  honeypot: z.string().optional(),
});
