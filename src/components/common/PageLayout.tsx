import React from "react";

const PageLayout = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="mx-auto flex w-full flex-col">
      {title && (
        <div className="relative flex h-[30vh] items-center overflow-hidden">
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"
            alt="test"
            className="absolute left-0 top-0 z-0 w-full object-cover opacity-30"
          />
          <div className="m-auto w-full max-w-screen-xl px-4">
            <h2 className="mt-16 text-7xl">{title}</h2>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default PageLayout;
