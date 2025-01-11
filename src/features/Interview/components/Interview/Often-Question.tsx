import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { OftenQuestionList } from "@/data/OftenQuestionList";
import { Question } from "@/types/question";
import parse from "html-react-parser";
import { FlameIcon, MousePointerClickIcon } from "lucide-react";
import { useCallback, useMemo } from "react";

function OftenQuestion() {
  const headerHeight = 140;
  const section = "link-point";

  const handleClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    event.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  }, []);

  const questions: Question[] = useMemo(() => OftenQuestionList, []);

  const groupedQuestions = useMemo(() => {
    return questions.reduce(
      (acc, question) => {
        if (!acc[question.category]) {
          acc[question.category] = [];
        }
        acc[question.category].push(question);
        return acc;
      },
      {} as Record<string, Question[]>,
    );
  }, [questions]);

  return (
    <Accordion type="single" collapsible className="w-full py-10">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-2xl font-semibold">자주 묻는 질문(FAQ)</h3>
        <Button variant="link" asChild className="hidden">
          <a className="cursor-pointer" onClick={(event) => handleClick(event, section)}>
            다른 질문확인
          </a>
        </Button>
      </div>

      {Object.entries(groupedQuestions).map(([category, questions], categoryIndex) => (
        <div key={categoryIndex} className="mb-5">
          <h4 className="flex items-center gap-2 bg-neutral-100 p-2 text-xl font-semibold">
            <MousePointerClickIcon className="text-green-500" /> {category}
          </h4>
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
              <AccordionTrigger className="flex text-base font-semibold">
                <div className="flex items-center justify-center gap-2">
                  {question.question}
                  <span className="flex items-center">
                    {Array.from({ length: question.frequency ?? 0 }).map((_, i) => (
                      <FlameIcon key={i} className="w-4 fill-red-500 text-yellow-500" />
                    ))}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-loose">{parse(question.answer)}</AccordionContent>
            </AccordionItem>
          ))}
        </div>
      ))}
    </Accordion>
  );
}

export default OftenQuestion;
