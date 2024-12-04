import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckboxTechStack } from "./CheckboxTechStack";

export function TechStackModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">기술스택</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[720px]">
        <DialogHeader>
          <DialogTitle>기술스택</DialogTitle>
        </DialogHeader>
        <CheckboxTechStack />
      </DialogContent>
    </Dialog>
  );
}
