import Button from "@/components/Button";

interface EditButtonsProps {
  editMode: boolean;
  onToggleEditMode: () => void;
}

const EditButtons = ({ editMode, onToggleEditMode }: EditButtonsProps) => {
  return (
    <div>
      {!editMode ? (
        <Button
          label="프로젝트 수정"
          color="green"
          onClick={onToggleEditMode}
        />
      ) : (
        <div className="flex gap-2">
          <Button label="수정 취소" color="green" onClick={onToggleEditMode} />
          <Button label="수정 저장" color="green" onClick={onToggleEditMode} />
        </div>
      )}
    </div>
  );
};

export default EditButtons;
