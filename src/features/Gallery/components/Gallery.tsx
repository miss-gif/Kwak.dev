import { useState } from "react";
import ImageViewer from "./ImageViewer";

const URLS = [
  "https://via.placeholder.com/500.jpg",
  "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png",
  "https://via.placeholder.com/300.jpg",
  "https://via.placeholder.com/200.jpg",
  "https://via.placeholder.com/100.jpg",
];

const Gallery = () => {
  const [isModal, setIsModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleModal = (index?: number) => {
    if (index !== undefined) setCurrentIndex(index); // 선택한 이미지의 인덱스를 설정
    setIsModal((prev) => !prev);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 py-4 md:grid-cols-3 xl:grid-cols-4">
        {URLS.map((url, index) => (
          <img key={index} src={url} alt="" className="w-full cursor-pointer" onClick={() => handleModal(index)} />
        ))}
      </div>

      {isModal && <ImageViewer handleModal={handleModal} urls={URLS} currentIndex={currentIndex} />}
    </div>
  );
};

export default Gallery;
