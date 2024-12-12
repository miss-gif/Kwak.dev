import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import Point from "../components/Point";

const PointPage = () => {
  const props = {
    title: "포인트",
    subtitle: "✨ 포인트를 충전하고 내역 확인하기",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <Point />
      </SectionWrapper>
    </PageLayout>
  );
};

export default PointPage;
