import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import MypageHome from "../components/MypageHome";

const Mypage = () => {
  const props = {
    title: "마이페이지",
    subtitle: "✨ 개인정보 및 설정을 확인해보세요!",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <SectionWrapper>
        <MypageHome />
      </SectionWrapper>
    </PageLayout>
  );
};

export default Mypage;
