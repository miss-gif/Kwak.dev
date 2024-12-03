import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BugIcon } from "lucide-react";

const BugReport = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon">
          <BugIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>확인되었습니다.</DialogTitle>
          <DialogDescription>- 회원가입 시 유효성 검사 누락</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BugReport;
