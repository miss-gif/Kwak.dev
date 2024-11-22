import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Gallery from "@/features/Gallery/pages";

const GalleryPage = () => {
  const props = {
    title: "갤러리",
    subtitle: "✨ 사진을 감상하세요.",
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
