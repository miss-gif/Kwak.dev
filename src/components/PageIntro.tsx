const text = {
  title: "아이디어를 실현하고, 문제를 해결하는 코드의 힘을 믿습니다.",

  content: [
    "여기에는 제가 작업한 프로젝트와 그 과정에서 배운 점들을 정리했습니다. ",
    "각 프로젝트는 문제를 해결하거나, 특정 기술을 익히기 위해 도전했던 노력의 결과물입니다.",
    "실제로 사용자 경험을 개선하거나, 효율적인 코드 작성에 중점을 두고 설계되었습니다.",
  ],
};

const PageIntro = () => {
  return (
    <section className="mx-auto mt-10 flex w-full max-w-screen-xl flex-col gap-3 rounded-xl bg-zinc-100 bg-opacity-10 p-6">
      <h3 className="text-xl font-semibold">{text.title}</h3>
      <div className="text-sm leading-5">
        {text.content.map((content, index) => (
          <div key={index}>
            <span>{content}</span>
            <br />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PageIntro;
