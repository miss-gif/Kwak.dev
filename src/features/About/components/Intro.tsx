import Strong from "@/components/common/Strong";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Intro = () => {
  const accordionData = [
    {
      value: "item-1",
      trigger: "개발자에 매료된 3가지",
      contents: [
        "공부한 지식을 실제로 활용할 수 있다는 점",
        "웹 분야의 확장성과 성장성",
        "서비스를 만들고 가치 창출할 수 있다는 점",
      ],
    },
    {
      value: "item-2",
      trigger: "개발 철학",
      contents: [
        "사용자가 직관적으로 이해하고 사용할 수 있는 인터페이스 구축",
        "코드에 가독성이 있어야 하며, 일관성 있는 코딩 스타일을 유지",
        "유지보수를 고려한 명확한 네이밍과 주석 작성",
        "문제 해결이 어려울 때는 러버덕 디버깅을 활용",
        "완벽한 코드는 없으며, 항상 개선점을 찾아 발전시킨다",
      ],
    },
    {
      value: "item-3",
      trigger: "개발자 목표",
      contents: [
        "테스트 주도 개발(TDD) 및 CI/CD 경험",
        "프로젝트 관리 및 리더십 역할 수행",
        "개발 커뮤니티 활동 및 오픈 소스 기여",
        "풀스택 개발로의 확장 (백엔드 기술 학습 및 프로젝트 적용)",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <h3 className="text-5xl font-semibold leading-normal">
        안녕하세요. <br /> 신입 FE 개발자 <br /> <Strong>곽도억</Strong>입니다.
      </h3>

      <div className="leading-loose">
        <div className="py-10">
          <Accordion type="single" collapsible>
            {accordionData.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="text-base">{item.trigger}</AccordionTrigger>
                {item.contents.map((content, index) => (
                  <AccordionContent key={index}>
                    {index + 1}. <Strong>{content}</Strong>
                  </AccordionContent>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Intro;
