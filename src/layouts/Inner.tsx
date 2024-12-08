interface InnerProps {
  children: React.ReactNode;
  className?: string;
}

const Inner = ({ children, className }: InnerProps) => {
  return <div className={`Inner m-auto w-full max-w-screen-xl ${className} px-4`}>{children}</div>;
};

export default Inner;
