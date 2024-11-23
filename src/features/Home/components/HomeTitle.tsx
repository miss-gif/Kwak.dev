import { home } from "@/mocks/data";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EditNoteIcon from "@mui/icons-material/EditNote";
import GitHubIcon from "@mui/icons-material/GitHub";

const text = {
  title: "Building Ideas into Reality with Code",
  subTitle: "PORTFOLIO",
  subTitle2: "WEB DEVELOPER",
  content: [
    "사이트에 방문해 주셔서 감사합니다",
    "이곳에서 제 작업물과 역량을 확인하실 수 있습니다.",
    "더 전문적인 프론트엔드 개발자가 되기 위해 노력하고 있습니다.",
    "사용자 중심의 접근성과 디테일을 살린 개발로 더 나은 경험을 제공하겠습니다.",
  ],
};

interface LinkButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const LinkButton = ({ href, icon: Icon, label }: LinkButtonProps) => (
  <a
    className="flex items-center justify-center gap-1 rounded-md border border-white px-4 py-3 text-sm shadow-md transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
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
