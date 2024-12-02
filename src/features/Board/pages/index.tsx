import PageLayout from "@/components/common/PageLayout";
import SectionWrapper from "@/components/common/SectionWrapper";
import StickyWrapper from "@/components/common/StickyWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import PostListPage from "./PostListPage";

const BoardPage = () => {
  const props = {
    title: "게시판",
    subtitle: "✨ 게시판을 통해 소통하세요.",
  };

  return (
    <PageLayout title={props.title} subtitle={props.subtitle}>
      <StickyWrapper>
        <div className="flex w-full gap-2">
          <Input placeholder="검색어를 입력해 주세요." />
          <Button>
            <Link to="/post/write">글쓰기</Link>
          </Button>
        </div>
      </StickyWrapper>
      <SectionWrapper>
        <div className="min-h-[40vh] w-full">
          <PostListPage />
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default BoardPage;
