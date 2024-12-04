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

// Todo 버그

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
          <DialogDescription>- 게시판 검색 불가</DialogDescription>
          <DialogDescription>- 포인트 충전 후 충전금액 확인이 실시간이 아님</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BugReport;
