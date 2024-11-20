import { linkItems } from "@/mocks/data";
import { capitalizeFirstLetter } from "@/utils/utils";
import MenuIcon from "@mui/icons-material/Menu";
import classNames from "classnames";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

type NavToggleProps = {
  toggleDrawer: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavToggle = ({ toggleDrawer, isOpen, setIsOpen }: NavToggleProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="block p-2 lg:hidden" onClick={toggleDrawer}>
        <MenuIcon />
      </button>

      <ul
        className={classNames(
          "fixed right-0 top-0 z-50 flex min-h-dvh w-full transform flex-col items-center justify-center gap-4 overflow-hidden bg-black bg-opacity-90 transition-transform duration-500 ease-in-out",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          },
        )}
      >
        {linkItems.map((item, index) => (
          <li key={index} className="text-center">
            <Link
              className="block p-2 text-3xl font-bold text-white transition-colors duration-100 hover:text-fire"
              to={item.path}
              onClick={closeMenu}
            >
              {capitalizeFirstLetter(item.name)}
            </Link>
          </li>
        ))}
        {/* 닫기 버튼 */}
        <button
          className="absolute right-0 top-0 p-4 text-white"
          onClick={closeMenu}
        >
          <CloseIcon sx={{ fontSize: "40px" }} />
        </button>
      </ul>
    </>
  );
};

export default NavToggle;
