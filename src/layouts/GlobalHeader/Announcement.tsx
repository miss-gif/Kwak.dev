import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Announcement = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>작업안내</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>지금은...</DialogTitle>
          <DialogDescription>- UI/UX 수정 작업중입니다.</DialogDescription>
          <DialogDescription>- 일부 기능은 작동하지 않을 수도 있습니다.</DialogDescription>
          <DialogDescription>- 버그 발견 및 문의는 사이트 내 `문의`를 이용해주세요.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Announcement;
