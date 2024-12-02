import { capitalizeFirstLetter } from "@/utils/utils";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface GnbProps {
  selectedItem: string | null;
  handleClick: (itemName: string | null) => void;
}

export const BOTTOM_MENU_ITEMS = [
  { name: "소개", path: "about" },
  { name: "프로젝트", path: "project" },
  { name: "인터뷰", path: "interview" },
  { name: "게시판", path: "board" },
  { name: "갤러리", path: "gallery" },
  { name: "타임라인", path: "timeline" },
  { name: "실시간 채팅", path: "chat" },
  { name: "포인트", path: "point" },
  { name: "프리뷰", path: "preview" },
];

export const TOP_MENU_ITEMS = [
  { name: "일정", path: "schedule" },
  { name: "관리자", path: "admin", role: "admin" },
  { name: "문의", path: "contact" },
  { name: "통계", path: "charts" },
];

const Gnb = ({ selectedItem, handleClick }: GnbProps) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex justify-end gap-6">
        {TOP_MENU_ITEMS.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={classNames("text-sm hover:text-blue-600", {
                "font-bold": selectedItem === item.name,
              })}
              onClick={() => handleClick(item.name)}
            >
              {capitalizeFirstLetter(item.name)}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-6">
        {BOTTOM_MENU_ITEMS.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={classNames("text-sm hover:text-blue-600", {
                "font-bold": selectedItem === item.name,
              })}
              onClick={() => handleClick(item.name)}
            >
              {capitalizeFirstLetter(item.name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Gnb;
