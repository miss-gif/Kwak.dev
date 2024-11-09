// max-w-screen-xl: 최대 너비 1280px
// w-full: 가로 전체
// flex: flex 레이아웃
// items-center: 세로 중앙 정렬
// m-auto: margin auto
// px-4: 좌우 padding 1rem
// 위의 클래스를 사용하여 섹션을 만들어줍니다.

// 타이틀이 있을 경우 타이틀을 표시하고, children을 표시합니다.
// 타이틀이 없을 경우 children만 표시합니다.

const SectionWrapper = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title?: string;
}) => {
  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-5 px-4 py-10">
      {title && (
        <h3 className="w-full text-center text-6xl font-semibold uppercase">
          {title}
        </h3>
      )}
      <div className="w-full">{children}</div>
    </section>
  );
};

export default SectionWrapper;
