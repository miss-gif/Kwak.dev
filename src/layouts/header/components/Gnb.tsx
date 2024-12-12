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
  { name: "타임라인", path: "timeline" },
  { name: "갤러리", path: "gallery" },
  { name: "통계", path: "charts" },
  { name: "문의", path: "contact" },
];

export const TOP_MENU_ITEMS = [
  { name: "게시판", path: "board" },
  { name: "방명록", path: "schedule" },
  { name: "포인트", path: "point" },
  { name: "프리뷰", path: "preview" },
];

const MenuList = ({
  items,
  selectedItem,
  handleClick,
}: {
  items: { name: string; path: string }[];
  selectedItem: string | null;
  handleClick: (itemName: string | null) => void;
}) => (
  <ul className="flex gap-6">
    {items.map((item) => (
      <li key={item.name}>
        <Link
          to={item.path}
          className={classNames("text-sm transition-colors duration-200 hover:text-blue-600", {
            "font-bold text-blue-600": selectedItem === item.name,
          })}
          onClick={() => handleClick(item.name)}
        >
          {capitalizeFirstLetter(item.name)}
        </Link>
      </li>
    ))}
  </ul>
);

const Gnb = ({ selectedItem, handleClick }: GnbProps) => {
  return (
    <nav className="hidden sm:flex sm:flex-col sm:items-end sm:justify-end">
      {/* Top Menu */}
      <MenuList items={TOP_MENU_ITEMS} selectedItem={selectedItem} handleClick={handleClick} />

      {/* Bottom Menu */}
      <MenuList items={BOTTOM_MENU_ITEMS} selectedItem={selectedItem} handleClick={handleClick} />
    </nav>
  );
};

export default Gnb;
