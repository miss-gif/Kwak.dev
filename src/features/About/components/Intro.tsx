const text = {
  title: "안녕하세요! 프론트엔드 개발자 곽도억입니다.",
  subTitle: "웹 개발의 매력을 뒤늦게 발견하고 이 길을 선택하게 되었습니다.",
  content: [
    "저는 항상 도전하고 성장하는 과정에 큰 가치를 두고,",
    "다양한 기술을 배우고 실험하며 실제 프로젝트에서 적용해서 경험을 쌓았습니다.",
  ],
  conclusion: [
    "끊임없이 새로운 기술을 탐구하고, 팀원들과의 협업을 통해 최고의 결과를 만들어내는 데 기여하고 싶습니다.",
  ],
};

const Intro = () => {
  return (
    <div className="flex flex-col gap-4 p-24">
      <h3 className="text-3xl font-semibold">{text.title}</h3>

      <p>{text.subTitle}</p>

      {text.content.map((content, index) => (
        <p key={index}>{content}</p>
      ))}

      {text.conclusion.map((conclusion, index) => (
        <p key={index}>{conclusion}</p>
      ))}
    </div>
  );
};

export default Intro;
