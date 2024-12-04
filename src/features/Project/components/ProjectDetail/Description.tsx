import ReactQuill from "react-quill";
import { ProjectData } from "../../types/type";

interface DescriptionProps {
  formData: ProjectData;
  editMode: boolean;
  setFormData: React.Dispatch<React.SetStateAction<ProjectData>>;
}

const Description = ({ formData, editMode, setFormData }: DescriptionProps) => {
  return (
    <div className="min-h-[30px] w-full border-t border-gray-500 py-8">
      {editMode ? <ReactQuill className="h-[800px] pb-8" /> : <p>{formData.description}</p>}
    </div>
  );
};

export default Description;
