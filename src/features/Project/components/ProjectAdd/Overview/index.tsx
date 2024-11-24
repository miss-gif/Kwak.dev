import { mockProject } from "@/features/Project/data/mockProject";
import OverviewArea from "./OverviewArea";

const Overview = () => {
  return (
    <div className="flex gap-4">
      <OverviewArea data={mockProject[0]} />
      {/* <OverviewForm /> */}
    </div>
  );
};

export default Overview;
