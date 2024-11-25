import Button, { LinkButton } from "@/components/Button";

interface ProjectButtonHeaderProps {
  children: React.ReactNode;
}

interface ProjectEditProps {
  editMode: boolean;
  onToggleEditMode: () => void;
}

const ProjectButtonHeader = ({ children }: ProjectButtonHeaderProps) => {
  return <div className="mb-4 flex justify-end">{children}</div>;
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
      {!editMode ? (
        <Button label="프로젝트 수정" color="teal" onClick={onToggleEditMode} />
      ) : (
        <div className="flex gap-2">
          <Button label="수정 취소" color="red" onClick={onToggleEditMode} />
          <Button label="수정 저장" onClick={onToggleEditMode} />
        </div>
      )}
    </ProjectButtonHeader>
  );
};
