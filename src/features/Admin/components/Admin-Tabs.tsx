import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function AdminTabs() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">123</TabsContent>

      <TabsContent value="password">123</TabsContent>
    </Tabs>
  );
}

export default AdminTabs;
