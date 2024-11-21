import { capitalizeFirstLetter } from "@utils/utils";
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
  { name: "통계", path: "charts" },
  { name: "일정", path: "schedule" },
  // { name: "타임라인", path: "timeline" },
];

export const TOP_MENU_ITEMS = [
  { name: "마이페이지", path: "mypage", role: "user" },
  { name: "프리뷰", path: "preview" },
  { name: "문의", path: "contact" },
  // { name: "후원", path: "payment" },
  { name: "관리자", path: "admin", role: "admin" },
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
