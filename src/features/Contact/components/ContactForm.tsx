import { submitContactForm } from "@/api/api";
import RedDot from "@/components/common/RedDot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { schema } from "@/schema/validation-Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>문의 유형</CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
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

          <div>
            <Label htmlFor="name">
              보내시는 분<RedDot />
            </Label>
            <Input type="text" id="name" placeholder="보내시는 분의 성함을 알려주세요." {...register("name")} />
            {errors.name?.message && (
              <p className="mt-2 text-xs font-medium text-red-500">{String(errors.name.message)}</p>
            )}
          </div>

          <div>
            <Label htmlFor="emaill">
              이메일
              <RedDot />
            </Label>
            <Input type="email" id="emaill" placeholder="이메일을 입력해 주세요." {...register("email")} />
            {errors.email?.message && (
              <p className="mt-2 text-xs font-medium text-red-500">{String(errors.email.message)}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message">
              내용
              <RedDot />
            </Label>
            <Textarea placeholder="문의 내용을 입력해 주세요." id="message" {...register("message")} className="h-40" />
            {errors.message?.message && (
              <p className="mt-2 text-xs font-medium text-red-500">{String(errors.message.message)}</p>
            )}

            <p className="mt-2 text-xs text-muted-foreground">귀하의 문의 내용은 지원팀에 전달됩니다.</p>
          </div>

          <div className="hidden">
            <label htmlFor="honeypot">스팸 방지 숨겨진 필드</label>
            <input id="honeypot" type="text" {...register("honeypot")} />
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full">
            보내기
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default ContactForm;
