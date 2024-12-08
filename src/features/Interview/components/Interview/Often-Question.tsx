import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const OftenQuestionList = [
  {
    question: "현재 주소지와 언제부터 출근이 가능한가요?",
    answer: "현재 주소지는 [주소 입력]이며, [출근 가능 날짜]부터 출근이 가능합니다.",
  },
  {
    question: "희망 연봉은 얼마이며, 경력은 어떻게 되나요?",
    answer: "희망 연봉은 [희망 연봉]이며, [경력 사항]을 보유하고 있습니다.",
  },
  {
    question: "본인의 공백기에 대해 설명해주세요.",
    answer:
      "입학부터 졸업까지의 기간 동안 [경험 및 활동], 첫 번째 학원 이후 [활동 내용], 이후 다시 학원을 선택한 이유는 [이유]입니다.",
  },
  {
    question: "지원 동기는 무엇인가요?",
    answer:
      "[회사]의 [특정 강점 또는 가치]에 매력을 느꼈고, 저의 [스킬/경험]이 회사의 목표에 부합한다고 판단하여 지원했습니다.",
  },
  {
    question: "프로젝트 진행 중에 가장 힘들었던 점과 이를 해결한 방법은 무엇인가요?",
    answer: "[프로젝트 중 겪은 어려움]을 겪었고, 이를 해결하기 위해 [문제 해결 방법]을 적용하였습니다.",
  },
  {
    question: "소통에서 문제가 발생했을 때 어떻게 해결하셨나요?",
    answer: "[소통 문제 사례]를 겪었고, 이를 해결하기 위해 [해결책 및 결과]를 실행했습니다.",
  },
  {
    question: "스트레스를 어떻게 해소하시나요?",
    answer: "저는 스트레스를 [운동, 취미 활동, 휴식 등 본인 방법]을 통해 해소합니다.",
  },
  {
    question: "선호하는 동료의 유형은 무엇인가요?",
    answer: "적극적으로 소통하고 협력할 수 있는 동료를 선호합니다.",
  },
  {
    question: "피하고 싶은 동료의 유형은 무엇인가요?",
    answer: "책임을 회피하거나 소통에 어려움이 있는 동료는 협업에 어려움을 줄 수 있어 피하고 싶습니다.",
  },
  {
    question: "회사를 선택할 때 본인만의 기준은 무엇인가요?",
    answer: "저는 [가치/문화, 성장 기회, 업무 환경 등]과 같은 요소를 중요하게 고려합니다.",
  },
  {
    question: "현재의 생활 루틴은 무엇인가요?",
    answer: "[평소 일과 및 루틴]을 유지하며 생활하고 있습니다.",
  },
  {
    question: "꾸준함을 유지하는 원동력은 무엇인가요?",
    answer: "저는 [목표 설정, 동기 부여 방법]을 통해 꾸준히 노력합니다.",
  },
  {
    question: "취미 생활은 무엇인가요?",
    answer: "[취미 활동]을 통해 스트레스를 해소하고 창의력을 발휘합니다.",
  },
  {
    question: "React 프로젝트에서 성능 최적화를 위해 어떤 방법을 사용했나요?",
    answer: "React.memo, useMemo, useCallback 등을 활용하고, 코드 분할을 통해 성능 최적화를 진행했습니다.",
  },
  {
    question: "최신 기술 동향을 어떻게 따라가고 있나요?",
    answer: "기술 블로그, 온라인 커뮤니티, 관련 서적 등을 통해 최신 기술 동향을 학습합니다.",
  },
];

function OftenQuestion() {
  return (
    <Accordion type="single" collapsible className="w-full py-10">
      <h3 className="pb-5 text-2xl font-semibold">자주 묻는 질문(FAQ)</h3>

      {OftenQuestionList.map((question, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-base font-semibold">{question.question}</AccordionTrigger>
          <AccordionContent className="text-base">{question.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default OftenQuestion;
