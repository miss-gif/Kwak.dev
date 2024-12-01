import { home } from "@/mocks/data";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EditNoteIcon from "@mui/icons-material/EditNote";
import GitHubIcon from "@mui/icons-material/GitHub";

const text = {
  title: "Building Ideas into Reality with Code",
  subTitle: "FRONT-END",
  subTitle2: "WEB DEVELOPER",
  content: [
    "이곳은 제가 실험하고 배우며 성장하는 공간입니다.",
    "새로운 기술을 시도하고, 생각을 코드로 풀어냅니다.",
    "완성된 작업물뿐 아니라 도전과 실수를 기록하고 공유합니다.",
    "보다 나은 개발자로 나아가기 위한 자유로운 여정을 확인해보세요.",
  ],
};

interface LinkButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const LinkButton = ({ href, icon: Icon, label }: LinkButtonProps) => (
  <a
    className="flex items-center justify-center gap-1 rounded-md border border-white px-4 py-3 text-sm transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon />
    {label}
  </a>
);

const links = [
  { href: home.github, icon: GitHubIcon, label: "깃허브" },
  { href: home.resume, icon: ContactPageIcon, label: "이력서" },
  { href: home.study, icon: EditNoteIcon, label: "스터디" },
];

const HomeTitle = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col">
        {/* 타이틀 */}
        <div className="">
          <p className="text-2xl font-bold">{text.title}</p>
          <p className="text-6xl font-bold lg:text-7xl">{text.subTitle}</p>
          <p className="text-6xl font-bold lg:text-7xl">{text.subTitle2}</p>
        </div>
        {/* 콘텐츠 */}
        <div className="py-14 leading-8">
          {text.content.map((item, index) => (
            <p key={index} className="text-sm leading-6">
              {item}
            </p>
          ))}
        </div>

        {/* 링크 그룹 */}
        <div className="flex gap-2">
          {links.map(({ href, icon, label }, index) => (
            <LinkButton key={index} href={href} icon={icon} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTitle;
