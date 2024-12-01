import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { PaymentPage } from "@/features/Payment";
import Point from "../components/Point";

const PointPage = () => {
  const props = {
    title: "포인트",
    subtitle: "✨ 포인트",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <PaymentPage />
        <Point />
      </SectionWrapper>
    </PageLayout>
  );
};

export default PointPage;
