import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { OftenQuestionList } from "@/data/OftenQuestionList";

function OftenQuestion() {
  const headerHeight = 140;
  const section = "link-point";

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, section: string) => {
    event.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Accordion type="single" collapsible className="w-full py-10">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-2xl font-semibold">자주 묻는 질문(FAQ)</h3>
        <Button variant="link" asChild>
          <a className="cursor-pointer" onClick={(event) => handleClick(event, section)}>
            다른 질문확인
          </a>
        </Button>
      </div>

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
