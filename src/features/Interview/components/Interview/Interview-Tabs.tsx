import { Button } from "@/components/ui/button";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const InterviewTabs = () => {
  return (
    <div className="flex items-center justify-between" id="link-point">
      <TabsList className="grid w-[400px] grid-cols-2">
        <TabsTrigger value="answered">답변 된 질문</TabsTrigger>
        <TabsTrigger value="unanswered">답변을 기다리는 질문</TabsTrigger>
      </TabsList>

      <Button
        onClick={() => {
          alert("질문하기 버튼 클릭");
        }}
      >
        질문하기
      </Button>
    </div>
  );
};

export default InterviewTabs;
