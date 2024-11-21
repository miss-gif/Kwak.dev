import React from "react";

interface ThankYouMessageProps {
  onReset: () => void;
}

const ThankYouMessage: React.FC<ThankYouMessageProps> = ({ onReset }) => (
  <div className="flex w-1/2 flex-col items-center justify-center rounded-md bg-white p-8 shadow-lg">
    <h2 className="mb-6 text-center text-xl font-semibold leading-10 text-gray-900">
      소중한 문의 감사합니다!
      <br />
      최대한 빠른 시일 내에 답변드리겠습니다.
    </h2>
    <button
      onClick={onReset}
      className="rounded-md bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      새 문의 하기
    </button>
  </div>
);

export default ThankYouMessage;
