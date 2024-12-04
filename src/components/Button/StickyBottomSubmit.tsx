interface StickyBottomSubmitProps {
  children: React.ReactNode;
}

const StickyBottomSubmit = ({ children }: StickyBottomSubmitProps) => {
  return <div className="sticky bottom-2 mx-auto w-full max-w-screen-xl">{children}</div>;
};

export default StickyBottomSubmit;
