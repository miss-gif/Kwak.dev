import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  const props = {
    title: "갤러리",
    subtitle: "✨ 제가 작업한 프로젝트 일부 사진입니다. 클릭하여 크게 보실 수 있습니다.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <Gallery />
      </SectionWrapper>
    </PageLayout>
  );
};

export default GalleryPage;
