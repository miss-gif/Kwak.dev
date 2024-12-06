interface ImageViewerProps {
  handleModal: () => void;
}

const CloseButton = ({ handleModal }: ImageViewerProps) => {
  return (
    <button
      className="absolute right-0 top-0 z-[70] bg-white p-5"
      onClick={() => {
        handleModal();
      }}
    >
      닫기
    </button>
  );
};

export default CloseButton;
