import { Button } from "@/components/ui/button";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NotebookPenIcon } from "lucide-react";

interface LinkButtonProps {
  href: string;
  label: string;
  Icon: React.ElementType;
}

const text = {
  subTitle: "Building Ideas into Reality with Code",
  title1: "FRONT-END",
  title2: "WEB DEVELOPER",
  content: [
    "이곳은 제가 실험하고 배우며 성장하는 공간입니다.",
    "새로운 기술을 시도하고, 생각을 코드로 풀어냅니다.",
    "완성된 작업물뿐 아니라 도전과 실수를 기록하고 공유합니다.",
    "보다 나은 개발자로 나아가기 위한 자유로운 여정을 확인해 주세요.",
  ],
};

const links = [
  {
    href: "https://github.com/miss-gif",
    label: "깃허브",
    Icon: GitHubIcon,
  },
  {
    href: "https://instinctive-answer-8a6.notion.site/7cc024f51ae948aca2c3bbb605a95827",
    label: "이력서",
    Icon: ContactPageIcon,
  },
  {
    href: "https://instinctive-answer-8a6.notion.site/74e393256dd24977beb8733d1fc23937",
    label: "학습기록",
    Icon: NotebookPenIcon,
  },
];

const LinkButton = ({ href, label, Icon }: LinkButtonProps) => (
  <Button asChild>
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex items-center gap-2">
      <Icon />
      {label}
    </a>
  </Button>
);

const HomeTitle = () => {
  return (
    <div className="flex flex-col items-center sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="text-center">
        <p className="text-2xl font-bold">{text.subTitle}</p>
        <p className="text-6xl font-bold lg:text-7xl">{text.title1}</p>
        <p className="text-6xl font-bold lg:text-7xl">{text.title2}</p>
      </div>

      {/* Content Section */}
      <div className="space-y-4 py-14 text-center">
        {text.content.map((item, index) => (
          <p key={index} className="text-sm leading-6 sm:text-base lg:text-lg">
            {item}
          </p>
        ))}
      </div>

      {/* Link Section */}
      <div className="flex flex-wrap justify-center gap-2">
        {links.map(({ href, label, Icon }, index) => (
          <LinkButton key={index} href={href} label={label} Icon={Icon} />
        ))}
      </div>
    </div>
  );
};

export default HomeTitle;
