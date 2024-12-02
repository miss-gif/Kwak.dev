import { submitContactForm } from "@/api/api";
import RedDot from "@/components/common/RedDot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { schema } from "@/schema/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Record<string, any>) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    try {
      const response = await submitContactForm(formData);

      if (response.data.result === "success") {
        onSubmitSuccess();
        toast.success("메일을 발송했습니다.");
      } else {
        toast.error("메일 발송에 실패했습니다.");
      }
    } catch (error) {
      toast.error("메일 발송에 실패했습니다.");
    }
  };

  return (
    <form className="w-full rounded-md bg-white p-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full space-y-8">
        <div className="grid w-full items-center gap-1.5">
          <Label>문의 유형</Label>

          <RadioGroup defaultValue="comfortable" className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">일반 문의</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bug" id="r2" />
              <Label htmlFor="r2">버그 제보</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="request" id="r3" />
              <Label htmlFor="r3">의뢰 / 제안</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="etc" id="r4" />
              <Label htmlFor="r4">기타</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Name Field */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">
            보내시는 분<RedDot />
          </Label>
          <Input type="text" id="name" placeholder="보내시는 분의 성함을 알려주세요." {...register("name")} />
          {errors.name?.message && <p className="mt-2 text-xs font-medium text-red-500">{String(errors.name.message)}</p>}
        </div>

        {/* Email Field */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="emaill">
            이메일
            <RedDot />
          </Label>
          <Input type="email" id="emaill" placeholder="이메일을 입력해 주세요." {...register("email")} />
          {errors.email?.message && <p className="mt-2 text-xs font-medium text-red-500">{String(errors.email.message)}</p>}
        </div>

        {/* Message Field */}
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">
            내용
            <RedDot />
          </Label>
          <Textarea placeholder="문의 내용을 입력해 주세요." id="message" {...register("message")} />
          {errors.message?.message && <p className="mt-2 text-xs font-medium text-red-500">{String(errors.message.message)}</p>}
          <p className="text-muted-foreground text-sm">귀하의 문의 내용은 지원팀에 전달됩니다.</p>
        </div>

        <fieldset className="hidden">
          <label htmlFor="honeypot">스팸 방지 숨겨진 필드</label>
          <input id="honeypot" type="text" {...register("honeypot")} />
        </fieldset>

        <Button type="submit">보내기</Button>
      </div>
    </form>
  );
};

export default ContactForm;
