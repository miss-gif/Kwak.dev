import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex w-full">
      <div className="h-dvh w-1/2 bg-gray-950 text-white">
        <div className="flex h-dvh flex-col justify-between p-6">
          <h1>
            <Link to="/">Kwak.dev</Link>
          </h1>
          <div className="space-y-3">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"</p>
            <p className="text-xs">아무나</p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="h-dvh w-1/2 bg-white text-gray-950 dark:bg-gray-900 dark:text-white">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
