import { InputWithLabel } from "@/components/ui/InputWithLabel";

interface ProjectInfoProps {
  client: string;
  startDate: string;
  endDate: string;
  teamSize: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEscKeyDown: (key: string, defaultValue?: string) => void;
}

const ProjectInfo = ({ client, startDate, endDate, teamSize, onChange, onEscKeyDown }: ProjectInfoProps) => {
  return (
    <div className="grid gap-2">
      <InputWithLabel label="클라이언트" name="client" value={client} onChange={onChange} onEscKeyDown={onEscKeyDown} />
      <div className="flex gap-2">
        <InputWithLabel
          label="작업시작"
          name="startDate"
          value={startDate}
          onChange={onChange}
          onEscKeyDown={onEscKeyDown}
        />
        <InputWithLabel
          label="작업종료"
          name="endDate"
          value={endDate}
          onChange={onChange}
          onEscKeyDown={onEscKeyDown}
        />
      </div>
      <InputWithLabel
        label="참여인원"
        name="teamSize"
        value={teamSize}
        onChange={onChange}
        onEscKeyDown={onEscKeyDown}
      />
    </div>
  );
};

export default ProjectInfo;
