import { InputWithLabel } from "@/components/ui/InputWithLabel";

interface ContributionGridProps {
  planning: string;
  design: string;
  publishing: string;
  development: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEscKeyDown: (key: string, defaultValue?: string) => void;
}

const ContributionGrid = ({
  planning,
  design,
  publishing,
  development,
  onChange,
  onEscKeyDown,
}: ContributionGridProps) => {
  return (
    <div className="gap- grid grid-cols-2 gap-2">
      <InputWithLabel label="기획" name="planning" value={planning} onChange={onChange} onEscKeyDown={onEscKeyDown} />
      <InputWithLabel label="디자인" name="design" value={design} onChange={onChange} onEscKeyDown={onEscKeyDown} />
      <InputWithLabel
        label="퍼블리싱"
        name="publishing"
        value={publishing}
        onChange={onChange}
        onEscKeyDown={onEscKeyDown}
      />
      <InputWithLabel
        label="개발"
        name="development"
        value={development}
        onChange={onChange}
        onEscKeyDown={onEscKeyDown}
      />
    </div>
  );
};

export default ContributionGrid;
