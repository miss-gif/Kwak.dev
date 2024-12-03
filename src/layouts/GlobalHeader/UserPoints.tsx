import { Button } from "@/components/ui/button";
import useUserPointsQuery from "@/features/Point/hooks/use-UserPointsQuery";
import { CoinsIcon } from "lucide-react";
import { Link } from "react-router-dom";

const UserPoints = ({ userId }: { userId: string }) => {
  const { data: points, isLoading, isError, error } = useUserPointsQuery(userId);

  if (isLoading) {
    return <p>포인트를 불러오는 중...</p>;
  }

  if (isError) {
    console.error(error);
    return <p>포인트 로드 실패!</p>;
  }

  return (
    <Button variant="ghost" asChild>
      <Link to={"/point"} className="flex items-center gap-2">
        <CoinsIcon className="text-orange-500" />
        <span>{points?.toLocaleString() || 0}</span>
      </Link>
    </Button>
  );
};

export default UserPoints;
