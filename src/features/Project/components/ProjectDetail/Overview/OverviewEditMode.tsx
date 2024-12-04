import ThumbnailSection from "./ThumbnailSection";
import ContributionGrid from "./ContributionGrid";
import ProjectLinks from "./ProjectLinks";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { ProjectData } from "@/features/Project/types/type";
import ProjectInfo from "./ProjectInfo";

const OverviewEditMode = ({
  formData,
  setFormData,
}: {
  formData: ProjectData;
  setFormData: React.Dispatch<React.SetStateAction<ProjectData>>;
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFormDataValue = (key: string, defaultValue: string = "") => {
    setFormData((prev) => ({
      ...prev,
      [key]: defaultValue,
    }));
  };

  return (
    <div>
      <div className="grid w-full gap-4 py-4">
        <InputWithLabel
          label="프로젝트 이름"
          name="projectName"
          value={formData.projectName}
          onChange={handleInputChange}
          onEscKeyDown={resetFormDataValue}
        />
        <InputWithLabel
          label="설명"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          onEscKeyDown={resetFormDataValue}
        />
      </div>

      <div className="flex w-full flex-col gap-4 xl:flex-row">
        <div className="w-full shrink-0 xl:w-2/5">
          <ThumbnailSection
            thumbnail={formData.thumbnail}
            badgeProjectDevice={formData.badgeProjectDevice}
            badgeProjectType={formData.badgeProjectType}
            badgeParticipation={formData.badgeParticipation}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid w-full gap-4">
          <ProjectInfo
            client={formData.client}
            startDate={formData.startDate}
            endDate={formData.endDate}
            teamSize={formData.teamSize}
            onChange={handleInputChange}
            onEscKeyDown={resetFormDataValue}
          />
          <ContributionGrid
            planning={formData.planning}
            design={formData.design}
            publishing={formData.publishing}
            development={formData.development}
            onChange={handleInputChange}
            onEscKeyDown={resetFormDataValue}
          />
          <ProjectLinks urls={formData} editable onChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
};

export default OverviewEditMode;
