import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const 상대 = () => {
  return (
    <div className="flex gap-2 py-2">
      <div className="">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="space-y-1">
        <div className="text-sm">상대방</div>
        <div className="flex items-end gap-2">
          <div className="rounded-lg bg-gray-100 p-2 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum quas voluptas porro suscipit esse
            maxime optio cum minus totam. Alias, possimus dolorem? Consectetur minus facilis ad, odit molestias
            accusantium?
          </div>
          <p className="shrink-0 text-xs">오후 8:12</p>
        </div>
      </div>
    </div>
  );
};

const 본인 = () => {
  return (
    <div className="flex justify-end gap-2 py-2">
      <div className="justify flex items-end gap-2">
        <p className="shrink-0 text-xs">오후 8:12</p>
        <div className="rounded-lg bg-lime-200 p-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum doloribus dolorem qui molestiae
          non optio consequuntur error, ipsam accusamus dolore nemo! Quam quia dignissimos magnam! Explicabo
          voluptatibus voluptate nobis.
        </div>
      </div>
    </div>
  );
};

const PrivateChatContent = () => {
  return (
    <div className="내용 flex flex-col gap-2 px-4 py-24">
      <상대 />
      <본인 />
      <상대 />
      <본인 />
      <상대 />
      <본인 />
      <상대 />
      <본인 />
      <상대 />
      <본인 />
      <상대 />
      <본인 />
      <상대 />
      <본인 />
      <상대 />
      <본인 />
      <상대 />
      <본인 />
      <상대 />
      <본인 />
    </div>
  );
};

export default PrivateChatContent;
