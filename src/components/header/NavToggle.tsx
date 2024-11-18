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
          "fixed right-0 top-0 z-50 flex h-dvh w-full transform flex-col items-center justify-center overflow-hidden bg-black bg-opacity-90 text-xl font-medium uppercase text-white transition-transform duration-500 ease-in-out",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          },
        )}
      >
        {linkItems.map((item, index) => (
          <li key={index} className="py-4 text-center">
            <Link
              className="block py-4 text-3xl font-bold text-white transition-colors duration-100 hover:text-fire"
              to={item.path}
              onClick={closeMenu}
            >
              {capitalizeFirstLetter(item.name)}
            </Link>
          </li>
        ))}
        {/* 닫기 버튼 */}
        <button
          className="absolute right-8 top-6 text-3xl text-white"
          onClick={closeMenu}
        >
          <CloseIcon />
        </button>
      </ul>
    </>
  );
};

export default NavToggle;
