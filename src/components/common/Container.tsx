const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-auto flex w-full max-w-screen-xl items-center justify-between px-4">
      {children}
    </div>
  );
};

export default Container;
