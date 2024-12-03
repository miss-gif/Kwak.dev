import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex w-full">
      <div className="relative h-dvh w-1/2 bg-gray-950 text-white">
        <div className="absolute left-0 top-0 p-10">
          <h1>
            <Link to="/">Kwak.dev</Link>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 space-y-3 p-10">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"</p>
          <p className="text-xs">아무나</p>
        </div>
      </div>
      <div className="h-dvh w-1/2 bg-white text-gray-950">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
