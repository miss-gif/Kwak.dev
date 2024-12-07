import { ProjectData } from "@/features/Project/types/type";
import OverviewReadMode from "./OverviewReadMode";

interface OverviewProps {
  formData: ProjectData;
}

const Overview = ({ formData }: OverviewProps) => {
  return (
    <div className="overview mb-8 w-full">
      <OverviewReadMode formData={formData} />
    </div>
  );
};

export default Overview;
