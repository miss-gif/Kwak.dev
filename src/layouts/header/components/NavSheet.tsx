import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
              <div>
                {!isAdminAuthenticated() ? (
                  <Link to="/admin">유저 모드</Link> // 인증되지 않은 경우
                ) : (
                  <button onClick={clearAdminAuthCookie}>관리자 모드</button> // 인증된 경우
                )}
              </div>
            </SheetClose>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
