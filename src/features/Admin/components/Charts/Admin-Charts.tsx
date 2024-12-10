import { saveDummyData } from "./saveDummyData";

const AdminCharts = () => {
  return (
    <div>
      <button onClick={saveDummyData}>더미 데이터 Firestore 저장</button>
    </div>
  );
};

export default AdminCharts;
