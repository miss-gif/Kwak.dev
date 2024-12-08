import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function TimelineTabs() {
  return (
    <Tabs defaultValue="account" className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>

      <TabsContent value="account"></TabsContent>
      <TabsContent value="password"></TabsContent>
    </Tabs>
  );
}

export default TimelineTabs;
