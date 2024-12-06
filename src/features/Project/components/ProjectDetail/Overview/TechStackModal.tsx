import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { techStackListData } from "@/features/Project/data/techStackListData";
import { RotateCcwIcon } from "lucide-react";

interface TechStackModalProps {
  label: string;
  onChange: (selectedTechStacks: string[]) => void;
  selectedTechStacks: string[];
  setSelectedTechStacks: (selectedTechStacks: string[]) => void;
}

export function TechStackModal({ label, onChange, selectedTechStacks, setSelectedTechStacks }: TechStackModalProps) {
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
          <DialogTitle className="flex items-center gap-2">
            {label}
            <Button
              size="icon"
              className="h-6 w-6"
              variant="destructive"
              onClick={() => {
                setSelectedTechStacks([]);
              }}
            >
              <RotateCcwIcon />
            </Button>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-wrap items-center gap-4">
          {techStackListData.map((techStack) => (
            <div key={techStack} className="flex items-center gap-2">
              <Checkbox
                id={techStack}
                checked={selectedTechStacks.includes(techStack)}
                onCheckedChange={(checked) => handleCheckboxChange(techStack, checked === true)}
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
