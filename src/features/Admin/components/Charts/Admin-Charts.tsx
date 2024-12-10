import { Button } from "@/components/ui/button";
import { saveDummyData } from "./saveDummyData";

const AdminCharts = () => {
  return (
    <div>
      <Button onClick={saveDummyData}>통계 더미 데이터 추가</Button>
    </div>
  );
};

export default AdminCharts;
