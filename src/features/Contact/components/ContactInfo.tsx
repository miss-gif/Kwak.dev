const ContactInfo = () => {
  return (
    <div className="w-80 shrink-0 rounded-lg bg-white p-6 text-gray-700">
      <h2 className="mb-4 text-2xl font-bold">Contact Me</h2>

      <div className="space-y-10">
        <div className="space-y-5">
          <div>
            <p>
              맡은 일에 대한
              <span className="ml-1 font-semibold hover:text-blue-500">책임감</span>을 가지고
            </p>
            <p>
              팀의
              <span className="ml-1 font-semibold hover:text-blue-500">목표를 위해 최선</span>을 다하며,
            </p>
            <p>
              동료들과
              <span className="ml-1 font-semibold hover:text-blue-500">함께 성장</span>
              하고 싶습니다.
            </p>
          </div>

          <p className="text-sm text-gray-600 opacity-80">@FRONT-END / @WEB DEVELOPER</p>
        </div>

        <div className="flex flex-col gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            OPEN KAKAO TALK
          </a>
          <a href="https://github.com/miss-gif" target="_blank" rel="noopener noreferrer">
            @miss-gif
          </a>
          <p>010-0000-0000</p>
          <p>abc@naver.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
