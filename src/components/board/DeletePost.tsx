interface DeletePostProps {
  onDelete: () => void;
}

const DeletePost = ({ onDelete }: DeletePostProps) => {
  return (
    <button
      onClick={onDelete}
      className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
    >
      삭제
    </button>
  );
};

export default DeletePost;
