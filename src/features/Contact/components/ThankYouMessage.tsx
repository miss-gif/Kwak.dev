import { Button } from "@/components/ui/button";
import React from "react";

interface ThankYouMessageProps {
  onReset: () => void;
}

const ThankYouMessage: React.FC<ThankYouMessageProps> = ({ onReset }) => (
  <div className="flex w-full flex-col items-center justify-center rounded-md bg-white p-8">
    <p className="mb-8 text-center text-2xl font-bold leading-10 text-gray-900">
      소중한 문의 감사합니다!
      <br />
      빠른 시일 내에 답변드리겠습니다.
    </p>

    <Button onClick={onReset}>추가 문의하기</Button>
  </div>
);

export default ThankYouMessage;
