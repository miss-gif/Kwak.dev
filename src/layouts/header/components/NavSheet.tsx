import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuIcon from "@mui/icons-material/Menu";
import { BOTTOM_MENU_ITEMS, TOP_MENU_ITEMS } from "./Gnb";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "@/utils/utils";
import { Button } from "@/components/ui/button";
import useAdminAuthCookie from "@/hooks/use-AdminAuthCookie";

const NavSheet = () => {
  const { isAdminAuthenticated, clearAdminAuthCookie } = useAdminAuthCookie();

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
          <SheetDescription>사이트맵 링크를 제공합니다.</SheetDescription>
          <nav className="py-5">
            <ul>
              {BOTTOM_MENU_ITEMS.map((item, index) => (
                <li key={index} className="text-center">
                  <SheetClose asChild>
                    <Link className="block p-2 duration-100 hover:font-semibold" to={item.path}>
                      {capitalizeFirstLetter(item.name)}
                    </Link>
                  </SheetClose>
                </li>
              ))}
              {TOP_MENU_ITEMS.map((item, index) => (
                <li key={index} className="text-center">
                  <SheetClose asChild>
                    <Link className="block p-2 duration-100 hover:font-semibold" to={item.path}>
                      {capitalizeFirstLetter(item.name)}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </nav>
          <SheetClose asChild className="absolute bottom-0 right-0 p-2">
            {!isAdminAuthenticated() ? (
              <Link to="/admin" className="text-xs text-gray-500">
                유저 모드
              </Link> // 인증되지 않은 경우
            ) : (
              <button onClick={clearAdminAuthCookie} className="text-xs text-gray-500">
                관리자 모드
              </button> // 인증된 경우
            )}
          </SheetClose>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
