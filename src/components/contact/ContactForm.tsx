import { submitContactForm } from "@/api/api";
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
    <form
      className="w-full max-w-lg rounded-lg bg-white p-6 shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-6">
        {/* Name Field */}
        <fieldset className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            보내시는 분
          </label>
          <input
            id="name"
            className="mt-2 rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
            placeholder="보내시는 분"
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.name.message)}
            </p>
          )}
        </fieldset>

        {/* Email Field */}
        <fieldset className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            이메일 주소
          </label>
          <input
            id="email"
            type="email"
            className="mt-2 rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
            placeholder="이메일 주소를 입력하세요"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.email.message)}
            </p>
          )}
        </fieldset>

        {/* Message Field */}
        <fieldset className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            내용
          </label>
          <textarea
            id="message"
            className="mt-2 h-32 rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
            placeholder="문의 내용을 입력해주세요."
            {...register("message")}
          />
          {errors.message?.message && (
            <p className="mt-1 text-sm text-red-500">
              {String(errors.message.message)}
            </p>
          )}
        </fieldset>

        {/* Honeypot Field for Spam Prevention */}
        <fieldset className="hidden">
          <label htmlFor="honeypot">스팸 방지 숨겨진 필드</label>
          <input id="honeypot" type="text" {...register("honeypot")} />
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          보내기
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
