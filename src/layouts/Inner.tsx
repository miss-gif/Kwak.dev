interface InnerProps {
  children: React.ReactNode;
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  className?: string;
}

const Inner = ({ children, justify = "between", className }: InnerProps) => {
  return (
    <div className={`m-auto flex w-full max-w-screen-xl items-center justify-${justify} ${className} px-4`}>
      {children}
    </div>
  );
};

export default Inner;
