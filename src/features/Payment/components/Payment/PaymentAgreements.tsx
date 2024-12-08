import { Checkbox } from "@/components/ui/checkbox";

export function PaymentAgreements() {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          결제 이용약관에 동의합니다.
        </label>
        <p className="text-sm text-muted-foreground">테스트 결제입니다.</p>
      </div>
    </div>
  );
}
