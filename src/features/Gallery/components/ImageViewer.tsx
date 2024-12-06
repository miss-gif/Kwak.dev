import CloseButton from "./CloseButton";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

interface ImageViewerProps {
  handleModal: () => void;
  urls: string[];
  currentIndex: number;
}

const ImageViewer = ({ handleModal, urls, currentIndex }: ImageViewerProps) => {
  return (
    <div className="fixed left-0 top-0 z-[60] h-screen w-full bg-black bg-opacity-80">
      <CloseButton handleModal={handleModal} />
      <Swiper
        initialSlide={currentIndex} // Swiper 시작 슬라이드 설정
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-full w-full"
      >
        {urls.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt="" className="mx-auto h-[100vh] w-auto object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageViewer;
