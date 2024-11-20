import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-500">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-700">
          페이지를 찾을 수 없습니다.
        </p>
        <p className="mt-2 text-gray-500">
          찾고 있는 페이지가 존재하지 않거나 이동된 것 같아요.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
