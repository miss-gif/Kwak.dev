import Button, { BackButton, LinkButton } from "@/components/Button";
import StickyWrapper from "@/components/common/StickyWrapper";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface ProjectButtonHeaderProps {
  children: React.ReactNode;
}

interface ProjectEditProps {
  editMode: boolean;
  onToggleEditMode: () => void;
}

interface ProjectCreateProps {
  handleFormReset: () => void;
}

const ProjectButtonHeader = ({ children }: ProjectButtonHeaderProps) => {
  return <div className="mb-4 flex justify-between">{children}</div>;
};

export const ProjectAdd = () => {
  return (
    <ProjectButtonHeader>
      <span></span>
      <LinkButton label="프로젝트 추가" to="add" />
    </ProjectButtonHeader>
  );
};

export const ProjectEdit = ({
  editMode,
  onToggleEditMode,
}: ProjectEditProps) => {
  return (
    <StickyWrapper>
      <BackButton label={<ArrowBackIosNewIcon />} color="blue" />
      {!editMode ? (
        <Button label="프로젝트 수정" onClick={onToggleEditMode} />
      ) : (
        <div className="flex gap-2">
          <Button label="취소" color="red" onClick={onToggleEditMode} />
        </div>
      )}
    </StickyWrapper>
  );
};

export const ProjectCreate = ({ handleFormReset }: ProjectCreateProps) => {
  return (
    <StickyWrapper>
      <BackButton label={<ArrowBackIosNewIcon />} color="blue" />
      <Button label="초기화" color="red" onClick={handleFormReset} />
    </StickyWrapper>
  );
};
