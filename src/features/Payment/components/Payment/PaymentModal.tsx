import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Payment from ".";

function PaymentModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">포인트 충전</Button>
      </DialogTrigger>
      <DialogContent className="w-full">
        <Payment />
      </DialogContent>
    </Dialog>
  );
}

export default PaymentModal;
