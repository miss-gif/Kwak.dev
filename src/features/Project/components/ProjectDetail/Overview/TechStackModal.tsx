import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { techStackListData } from "@/features/Project/data/techStackListData";

interface TechStackModalProps {
  label: string;
  onChange: (selectedTechStacks: string[]) => void; // 선택된 기술 스택을 부모로 전달
  selectedTechStacks: string[]; // 부모에서 전달받은 현재 선택된 기술 스택
}

export function TechStackModal({ label, onChange, selectedTechStacks }: TechStackModalProps) {
  const handleCheckboxChange = (techStack: string, checked: boolean) => {
    // 체크된 항목을 업데이트하는 로직
    if (checked) {
      onChange([...selectedTechStacks, techStack]);
    } else {
      onChange(selectedTechStacks.filter((item) => item !== techStack));
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">{label}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[720px]">
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-wrap items-center gap-4">
          {techStackListData.map((techStack) => (
            <div key={techStack} className="flex items-center gap-2">
              <Checkbox
                id={techStack}
                checked={selectedTechStacks.includes(techStack)}
                onCheckedChange={(checked) => handleCheckboxChange(techStack, checked)}
              />
              <label
                htmlFor={techStack}
                className="min-w-24 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {techStack}
              </label>
            </div>
          ))}
        </div>
        <DialogClose asChild>
          <Button className="mt-2">저장</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
