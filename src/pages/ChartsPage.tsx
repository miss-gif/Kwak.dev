import UserStats from "@/components/charts/UserStats";
import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ChartsPage = () => {
  const auth = getAuth();

  // 사용자 인증 상태를 확인하는 코드
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // 사용자가 로그인한 상태일 때
      console.log("User UID:", user.uid);
      console.log("User Email:", user.email);
      console.log("User Display Name:", user.displayName);
      console.log("User Photo URL:", user.photoURL);
    } else {
      // 사용자가 로그인하지 않은 상태일 때
      console.log("No user is signed in");
    }
  });

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
