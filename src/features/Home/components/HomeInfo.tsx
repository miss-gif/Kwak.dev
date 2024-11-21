import HomeLeft from "@/features/Home/components/HomeLeft";
import HomeNotice from "./HomeNotice";

const HomeInfoData = {
  streakStats: {
    title: "streakStats",
    image:
      "https://streak-stats.demolab.com?user=miss-gif&theme=transparent&hide_border=true&border_radius=0&locale=ko&card_width=467",
  },
  statsCard: {
    title: "statsCard",
    image:
      "https://github-readme-stats.vercel.app/api?username=miss-gif&show_icons=true&locale=kr&bg_color=ffffff00&hide_border=true&title_color=000000&hide_title=true",
  },
  mostLanguages: {
    title: "mostLanguages",
    image:
      "https://github-readme-stats.vercel.app/api/top-langs/?username=miss-gif&layout=compact&locale=kr&hide=less,html,php,css&langs_count=8&bg_color=ffffff00&hide_border=true&title_color=000000&hide_title=true&card_width=467",
  },
};

const HomeInfo = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-10 md:min-h-svh md:flex-none">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between">
        <HomeLeft />
        <div className="flex gap-2 md:flex md:flex-col">
          {Object.values(HomeInfoData).map(({ title, image }) => (
            <HomeNotice key={title} title={title} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
