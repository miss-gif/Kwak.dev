const ContactInfo = () => {
  return (
    <div className="w-96 rounded-lg bg-gray-100 p-4 shadow-md">
      <div>
        <img
          src="https://www.printrobo.co.kr/cdn/blog/870x531-pb10008.jpg"
          alt=""
        />
      </div>
      <p className="mb-2 text-lg font-semibold">이름</p>
      <p className="mb-1">주소</p>
      <p className="mb-1">깃허브</p>
      <p className="mb-1">이메일</p>
      <p className="mb-1">Web Developer</p>
    </div>
  );
};

export default ContactInfo;
