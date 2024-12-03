interface StrongProps {
  children: React.ReactNode;
}

const Strong = ({ children }: StrongProps) => {
  return <strong className="font-semibold">{children}</strong>;
};

export default Strong;
