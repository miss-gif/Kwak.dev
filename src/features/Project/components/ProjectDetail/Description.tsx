import { ProjectData } from "../../types/type";

interface DescriptionProps {
  formData: ProjectData;
}

const Description = ({ formData }: DescriptionProps) => {
  return (
    <div className="min-h-[30px] w-full border-t border-neutral-200 py-8">
      <p>{formData.description}</p>
    </div>
  );
};

export default Description;
