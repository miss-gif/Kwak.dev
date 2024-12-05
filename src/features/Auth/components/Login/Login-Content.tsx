import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PasswordLogin from "./PasswordLogin";
import AuthEmail from "./AuthEmail";

const LoginContent = () => {
  return (
    <Tabs defaultValue="password" className="flex flex-col justify-between gap-2">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="password" className="text-xs font-semibold">
          일반
        </TabsTrigger>
        <TabsTrigger value="email" className="text-xs font-semibold">
          이메일 인증
        </TabsTrigger>
      </TabsList>

      <TabsContent value="password">
        <PasswordLogin />
      </TabsContent>

      <TabsContent value="email">
        <AuthEmail />
      </TabsContent>
    </Tabs>
  );
};

export default LoginContent;
