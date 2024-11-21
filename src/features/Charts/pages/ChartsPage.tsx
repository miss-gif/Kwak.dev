import UserStats from "@/components/charts/UserStats";
import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import useWarning from "@/hooks/useWarning";

const ChartsPage = () => {
  useWarning({ text: "현재 서비스 준비중입니다." });

  const props = {
    title: "소개",
    subtitle: "✨ 서브타이틀",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <h3>통계</h3>
        <UserStats />
      </SectionWrapper>
    </PageLayout>
  );
};

export default ChartsPage;
