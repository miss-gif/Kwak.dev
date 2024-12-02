interface InnerProps {
  children: React.ReactNode;
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
}

const Inner = ({ children, justify = "between" }: InnerProps) => {
  return <div className={`m-auto flex w-full max-w-screen-xl items-center justify-${justify} px-4`}>{children}</div>;
};

export default Inner;
