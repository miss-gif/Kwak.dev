import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckboxTechStack } from "./CheckboxTechStack";

interface TechStackModalProps {
  label: string;
}

export function TechStackModal({ label }: TechStackModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">{label}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[720px]">
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
        </DialogHeader>
        {/* 체크박스 */}
        <CheckboxTechStack />
      </DialogContent>
    </Dialog>
  );
}
