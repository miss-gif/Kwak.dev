interface StickyWrapperProps {
  children: React.ReactNode;
}

const StickyWrapper = ({ children }: StickyWrapperProps) => {
  return (
    <div className="sticky top-20 z-10 mb-4 flex w-full items-center justify-between gap-2 rounded-lg border border-gray-200 bg-zinc-50 px-2 py-2">
      {children}
    </div>
  );
};

export default StickyWrapper;
