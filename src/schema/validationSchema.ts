// validationSchema.ts
import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "이름을 입력해 주세요."),
  email: z.string().email("유효한 이메일 주소를 입력해 주세요."),
  message: z.string().min(1, "메시지를 입력해 주세요."),
  honeypot: z.string().optional(),
});

export const postSchema = z.object({
  title: z.string().min(1, { message: "제목을 입력해주세요." }),
  content: z.string().min(1, { message: "내용은 최소 1자 이상이어야 합니다." }),
  author: z.string().min(1, { message: "작성자를 입력해주세요." }),
  id: z.number().int(),
  uid: z.string().min(1),
  createdAt: z.string().min(1),
});
