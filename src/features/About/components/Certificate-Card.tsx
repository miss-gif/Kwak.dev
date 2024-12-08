import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface CertificateCardProps {
  type: string;
  title: string;
  date: string;
  organization: string;
  clssName?: string;
  color?: string;
}

function CertificateCard({ type, title, date, organization, color = "blue", clssName }: CertificateCardProps) {
  return (
    <Card className={`flex h-[320px] flex-col justify-between overflow-hidden bg-${color}-500 ${clssName}`}>
      <CardHeader className="text-white">
        <CardDescription className="text-white">{type}</CardDescription>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex h-32 items-end text-sm text-neutral-100">{organization}</CardContent>

      <CardFooter className="flex gap-2 bg-white py-5 text-sm">
        <span className="text-neutral-400">PASS </span> {date}
      </CardFooter>
    </Card>
  );
}

export default CertificateCard;
