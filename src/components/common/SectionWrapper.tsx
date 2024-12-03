// max-w-screen-xl: 최대 너비 1280px

// 타이틀이 있을 경우 타이틀을 표시하고, children을 표시합니다.
// 타이틀이 없을 경우 children만 표시합니다.

import Inner from "@/layouts/Inner";
import { GraduationCapIcon } from "lucide-react";

const Heading = ({ title }: { title: string }) => {
  return (
    <div className="relative flex items-center justify-center py-10">
      <div className="absolute -left-14 hidden -translate-x-1/2 transform text-5xl md:block">
        <GraduationCapIcon className="h-20 w-20" />
      </div>
      <h3 className="border-b-4 border-black py-2 text-center text-6xl font-semibold uppercase dark:border-white">
        {title}
      </h3>
    </div>
  );
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
