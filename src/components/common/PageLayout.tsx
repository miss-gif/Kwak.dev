import useScrollTo from "@/hooks/useScrollTo";
import React from "react";

const PageLayout = ({
  children,
  title,
  subtitle,
  className,
}: {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}) => {
  useScrollTo();

  const URL =
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png";

  return (
    <div className={`mx-auto flex w-full flex-col ${className}`}>
      {title && (
        <div className="flex h-[40vh] items-center overflow-hidden">
          <img src={URL} alt="test" className="absolute left-0 top-0 -z-10 h-[500px] w-full object-cover opacity-30" />
          <div className="m-auto w-full max-w-screen-xl px-4">
            <h2 className="mt-16 text-7xl font-bold">{title}</h2>
            <p className="pt-5">{subtitle}</p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default PageLayout;
