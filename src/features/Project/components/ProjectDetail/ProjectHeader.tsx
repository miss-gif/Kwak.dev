import EditButtons from "./EditButtons";

interface ProjectHeaderProps {
  editMode: boolean;
  onToggleEditMode: () => void;
}

const ProjectHeader = ({ editMode, onToggleEditMode }: ProjectHeaderProps) => {
  return (
    <div className="mb-4 flex justify-end">
      <EditButtons editMode={editMode} onToggleEditMode={onToggleEditMode} />
    </div>
  );
};

export default ProjectHeader;
