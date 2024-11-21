interface RouteConfig {
  path: string;
  element: ReactNode;
  children?: RouteConfig[]; // 중첩 라우팅 지원
}
