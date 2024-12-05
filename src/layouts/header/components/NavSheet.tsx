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
import { useAuthStore } from "@/stores/authStore";
import UserAvatarLink from "@/layouts/GlobalHeader/UserAvatarLink";
import UserPoints from "@/layouts/GlobalHeader/UserPoints";

const NavSheet = () => {
  const { isAdminAuthenticated, clearAdminAuthCookie } = useAdminAuthCookie();
  const { user, logout } = useAuthStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="sr-only">사이트 내부 네비게이션 메뉴입니다.</SheetTitle>
          <SheetDescription className="sr-only">로그인 상태에 따라 일부 메뉴가 변경됩니다.</SheetDescription>

          <div>{user ? <UserAvatarLink /> : "비로그인"}</div>
          <div className="flex justify-center">{user ? <UserPoints userId={user?.uid || ""} /> : ""}</div>

          <nav className="py-8">
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

          <SheetClose>
            <Button onClick={logout} variant="secondary" className="text-xs font-semibold text-red-500">
              로그아웃
            </Button>
          </SheetClose>

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
