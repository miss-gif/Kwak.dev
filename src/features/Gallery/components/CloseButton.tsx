import { Button } from "@/components/ui/button";

interface ImageViewerProps {
  handleModal: () => void;
}

const CloseButton = ({ handleModal }: ImageViewerProps) => {
  const onClose = () => {
    handleModal();
    document.body.style.overflow = "auto";
  };

  return (
    <Button className="absolute right-0 top-0 z-[70] m-2 border-2 border-white" onClick={onClose}>
      닫기
    </Button>
  );
};

export default CloseButton;
