import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import MenuIcon from "@mui/icons-material/Menu";
import { BOTTOM_MENU_ITEMS, TOP_MENU_ITEMS } from "./Gnb";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "@/utils/utils";
import { Button } from "@/components/ui/button";

const NavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>바로가기</SheetTitle>
          <SheetDescription>
            <ul>
              {BOTTOM_MENU_ITEMS.map((item, index) => (
                <li key={index} className="text-center">
                  <SheetClose asChild>
                    <Link className="block p-2 text-3xl font-bold transition-colors duration-100 hover:text-fire" to={item.path}>
                      {capitalizeFirstLetter(item.name)}
                    </Link>
                  </SheetClose>
                </li>
              ))}
              {TOP_MENU_ITEMS.map((item, index) => (
                <li key={index} className="text-center">
                  <SheetClose asChild>
                    <Link className="block p-2 text-3xl font-bold transition-colors duration-100 hover:text-fire" to={item.path}>
                      {capitalizeFirstLetter(item.name)}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <SheetClose asChild className="absolute bottom-0 right-0 p-2">
              <Link to="admin">관리자</Link>
            </SheetClose>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
