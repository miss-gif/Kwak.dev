// max-w-screen-xl: 최대 너비 1280px

// 타이틀이 있을 경우 타이틀을 표시하고, children을 표시합니다.
// 타이틀이 없을 경우 children만 표시합니다.

import Inner from "@/layouts/Inner";

const Heading = ({ title }: { title: string }) => {
  return <h3 className="border-b-4 py-2 text-center text-6xl font-semibold uppercase">{title}</h3>;
};

const SectionWrapper = ({ children, title }: { children?: React.ReactNode; title?: string }) => {
  return (
    <section className="bg-red-5">
      <Inner className="flex-col">
        {title && <Heading title={title} />}
        <div className="w-full">{children}</div>
      </Inner>
    </section>
  );
};

export default SectionWrapper;
