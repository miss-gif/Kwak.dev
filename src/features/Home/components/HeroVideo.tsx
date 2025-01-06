import video from "@/assets/video/main.mp4";

const HeroVideo = () => {
  return (
    <video autoPlay muted loop className="absolute left-0 top-0 -z-20 h-screen w-full object-cover opacity-30">
      <source src={video} type="video/mp4" />
      브라우저에서 비디오 태그를 지원하지 않습니다.
    </video>
  );
};

export default HeroVideo;
