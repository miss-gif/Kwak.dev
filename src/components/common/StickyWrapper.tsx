import Inner from "@/layouts/Inner";

interface StickyWrapperProps {
  children: React.ReactNode;
}

const StickyWrapper = ({ children }: StickyWrapperProps) => {
  return (
    <div className="sticky top-20 z-50 bg-zinc-50 py-2 dark:bg-stone-950">
      <Inner>{children}</Inner>
    </div>
  );
};

export default StickyWrapper;
