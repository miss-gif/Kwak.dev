import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Gallery from "@/features/Gallery/pages";

const GalleryPage = () => {
  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
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
