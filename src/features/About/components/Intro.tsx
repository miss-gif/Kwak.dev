import Strong from "@/components/common/Strong";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Intro = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-5xl font-semibold leading-normal">
        안녕하세요. <br /> 신입 FE 개발자 <br /> <Strong>곽도억</Strong>입니다.
      </h3>

      <div className="leading-loose">
        <div className="w-[500px] py-10">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base">개발자에 매료된 3가지</AccordionTrigger>
              <AccordionContent>
                1. 공부한 지식을 실제로 <Strong>활용</Strong>할 수 있다는 점
              </AccordionContent>
              <AccordionContent>
                2. 웹 분야의 <Strong>확장성</Strong>과 <Strong>성장성</Strong>
              </AccordionContent>
              <AccordionContent>
                3. 서비스를 <Strong>만들고 가치 창출</Strong>할 수 있다는 점
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base">개발 철학</AccordionTrigger>
              <AccordionContent>
                1. 사용자가 <Strong>직관적</Strong>으로 이해하고 사용할 수 있는 인터페이스 구축
              </AccordionContent>
              <AccordionContent>
                2. 코드에 <Strong>가독성</Strong>이 있어야 하며, <Strong>일관성</Strong> 있는 코딩 스타일을 유지
              </AccordionContent>
              <AccordionContent>
                3. 유지보수를 고려한 <Strong>명확한 네이밍과 주석 작성</Strong>
              </AccordionContent>
              <AccordionContent>
                4. 문제 해결이 어려울 때는 <Strong>러버덕 디버깅</Strong>을 활용
              </AccordionContent>
              <AccordionContent>
                5. 완벽한 코드는 없으며, 항상 <Strong>개선점</Strong>을 찾아 발전시킨다
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base">개발자 목표</AccordionTrigger>
              <AccordionContent>1. 테스트 주도 개발(TDD) 및 CI/CD 경험</AccordionContent>
              <AccordionContent>2. 프로젝트 관리 및 리더십 역할 수행</AccordionContent>
              <AccordionContent>3. 개발 커뮤니티 활동 및 오픈 소스 기여</AccordionContent>
              <AccordionContent>4. 풀스택 개발로의 확장 (백엔드 기술 학습 및 프로젝트 적용)</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Intro;
