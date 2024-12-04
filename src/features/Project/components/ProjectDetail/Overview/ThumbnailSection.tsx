import { InputWithLabel } from "@/components/ui/InputWithLabel";
import RadioGroup from "../../ProjectForm/RadioGroup";

interface ThumbnailSectionProps {
  thumbnail: string;
  badgeProjectDevice: string;
  badgeProjectType: string;
  badgeParticipation: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ThumbnailSection = ({
  thumbnail,
  badgeProjectDevice,
  badgeProjectType,
  badgeParticipation,
  onChange,
}: ThumbnailSectionProps) => {
  return (
    <div className="grid gap-4">
      {/* 썸네일 URL 입력 */}
      <InputWithLabel label="썸네일 URL" name="thumbnail" value={thumbnail} onChange={onChange} />

      {/* 디바이스 지원 */}
      <RadioGroup
        label="디바이스 지원"
        options={["반응형", "데스크탑"]}
        name="badgeProjectDevice"
        value={badgeProjectDevice}
        onChange={onChange}
      />

      {/* 프로젝트 유형 */}
      <RadioGroup
        label="프로젝트 유형"
        options={["퍼블리싱", "프론트엔드", "풀스택"]}
        name="badgeProjectType"
        value={badgeProjectType}
        onChange={onChange}
      />

      {/* 참여 형태 */}
      <RadioGroup
        label="참여 형태"
        options={["개인", "협업", "스터디"]}
        name="badgeParticipation"
        value={badgeParticipation}
        onChange={onChange}
      />
    </div>
  );
};

export default ThumbnailSection;
