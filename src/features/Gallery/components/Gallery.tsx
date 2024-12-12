import { useState } from "react";
import ImageViewer from "./ImageViewer";
import { galleryImageUrl } from "@/data/galleryImageUrl";

const Gallery = () => {
  const [isModal, setIsModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleModal = (index?: number) => {
    if (index !== undefined) setCurrentIndex(index); // 선택한 이미지의 인덱스를 설정
    setIsModal((prev) => !prev);
    document.body.style.overflow = "hidden";
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 py-4 md:grid-cols-3 xl:grid-cols-4">
        {galleryImageUrl.map((url, index) => (
          <div className="h-[300px] overflow-hidden rounded-sm bg-neutral-50 p-1">
            <img
              key={index}
              src={url}
              alt="galleryImage"
              className="h-80 w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-125"
              onClick={() => handleModal(index)}
            />
          </div>
        ))}
      </div>

      {isModal && <ImageViewer handleModal={handleModal} urls={galleryImageUrl} currentIndex={currentIndex} />}
    </div>
  );
};

export default Gallery;
