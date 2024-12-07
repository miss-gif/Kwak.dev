import SanitizedContent from "@/components/Quill/SanitizedContent";
import { ProjectFormData } from "@/types/ProjectFormData";

interface DescriptionProps {
  formData: ProjectFormData;
}

const Description = ({ formData }: DescriptionProps) => {
  return (
    <div className="min-h-[30px] w-full border-t border-neutral-200 py-8">
      <SanitizedContent content={formData.descriptionDetail} />
    </div>
  );
};

export default Description;
