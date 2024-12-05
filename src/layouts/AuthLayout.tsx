import useFamousLine from "@/hooks/use-FamousLine";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { famousLine, loading, error } = useFamousLine();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex w-full justify-center">
      <div className="hidden h-dvh w-1/2 bg-gray-950 text-white md:block">
        <div className="flex h-dvh flex-col justify-between p-6">
          <h1>
            <Link to="/">Kwak.dev</Link>
          </h1>

          {famousLine && (
            <div className="space-y-3">
              <p className="text-lg">{famousLine.message}</p>
              <p className="text-xs">
                <span className="font-semibold">{famousLine.author}</span>
                <span> - {famousLine.authorProfile}</span>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="h-dvh w-full bg-white text-gray-950 dark:bg-gray-900 dark:text-white md:w-1/2">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
