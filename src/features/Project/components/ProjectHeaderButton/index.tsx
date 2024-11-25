import Button, { BackButton, LinkButton } from "@/components/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface ProjectButtonHeaderProps {
  children: React.ReactNode;
}

interface ProjectEditProps {
  editMode: boolean;
  onToggleEditMode: () => void;
}

const ProjectButtonHeader = ({ children }: ProjectButtonHeaderProps) => {
  return <div className="mb-4 flex justify-between">{children}</div>;
};

export const ProjectAdd = () => {
  return (
    <ProjectButtonHeader>
      <LinkButton label="프로젝트 추가" to="add" />
    </ProjectButtonHeader>
  );
};

export const ProjectEdit = ({
  editMode,
  onToggleEditMode,
}: ProjectEditProps) => {
  return (
    <ProjectButtonHeader>
      <BackButton label={<ArrowBackIosNewIcon />} color="blue" />
      {!editMode ? (
        <Button label="프로젝트 수정" onClick={onToggleEditMode} />
      ) : (
        <div className="flex gap-2">
          <Button label="수정 취소" color="red" onClick={onToggleEditMode} />
          <Button label="수정 저장" onClick={onToggleEditMode} />
        </div>
      )}
    </ProjectButtonHeader>
  );
};
