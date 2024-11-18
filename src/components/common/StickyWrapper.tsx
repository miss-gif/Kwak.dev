interface StickyWrapperProps {
  children: React.ReactNode;
}

const StickyWrapper = ({ children }: StickyWrapperProps) => {
  return (
    <div className="sticky top-24 z-50 mb-4 flex w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-2 py-2">
      {children}
    </div>
  );
};

export default StickyWrapper;
