interface UpDownButtonProps {
  postId: string;
  onClick: (postId: string) => void;
  post: any;
  children: React.ReactNode;
  rule: string;
}

const UpDownButton = ({ postId, onClick, post, children, rule }: UpDownButtonProps) => {
  if (!postId) return null;

  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-md bg-gray-50 p-5 text-gray-600 transition-transform hover:bg-gray-100 active:scale-95"
      onClick={() => onClick(postId)}
    >
      {children}
      <span>{post[rule]}</span>
    </button>
  );
};

export default UpDownButton;
