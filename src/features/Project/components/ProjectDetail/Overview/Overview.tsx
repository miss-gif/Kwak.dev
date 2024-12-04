import OverviewReadMode from "./OverviewReadMode";
import OverviewEditMode from "./OverviewEditMode";
import { ProjectData } from "@/features/Project/types/type";

interface OverviewProps {
  formData: ProjectData;
  editMode: boolean;
  setFormData: React.Dispatch<React.SetStateAction<ProjectData>>;
}

const Overview = ({ formData, editMode, setFormData }: OverviewProps) => {
  return (
    <div className="overview w-full">
      {editMode ? (
        <OverviewEditMode formData={formData} setFormData={setFormData} />
      ) : (
        <OverviewReadMode formData={formData} />
      )}
    </div>
  );
};

export default Overview;
