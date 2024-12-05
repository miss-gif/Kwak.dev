import { Button } from "@/components/ui/button";

const LoginOther = () => {
  const buttons = [
    { label: "카카오", id: "kakao" },
    { label: "네이버", id: "naver" },
    { label: "구글", id: "google" },
  ];

  const handleClick = (button: any) => {
    alert(`${button.label} 버튼 클릭!`);
  };

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <div className="space-y-2">
        {buttons.map((button, index) => (
          <Button key={index} variant="outline" className="w-full" onClick={() => handleClick(button)}>
            {button.label}
          </Button>
        ))}
      </div>
    </>
  );
};

export default LoginOther;
