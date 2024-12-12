import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ContactInfo = () => {
  return (
    <Card className="shrink-0">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
      </CardHeader>

      <CardContent>
        <p>
          맡은 일에 대한
          <b className="ml-1">책임감</b>을 가지고
        </p>
        <p>
          팀의
          <b className="ml-1">목표를 위해 최선</b>을 다하며,
        </p>
        <p>
          동료들과
          <b className="ml-1">함께 성장</b>
          하고 싶습니다.
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <p className="text-xs text-neutral-500">FRONT-END / WEB DEVELOPER</p>
      </CardFooter>
    </Card>
  );
};

export default ContactInfo;
