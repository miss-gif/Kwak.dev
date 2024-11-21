interface ToEditPostProps {
  onEdit: () => void;
}

const ToEditPost = ({ onEdit }: ToEditPostProps) => {
  return (
    <button
      onClick={onEdit}
      className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
    >
      수정
    </button>
  );
};

export default ToEditPost;
