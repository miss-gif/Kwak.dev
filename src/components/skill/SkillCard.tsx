import usePercentageObserver from "@/hooks/usePercentageObserver";

interface SkillCardProps {
  img: string;
  name: string;
  percentage: number;
  description: string[];
}

const SkillCard = ({ img, name, percentage, description }: SkillCardProps) => {
  const { currentPercentage, elementRef } = usePercentageObserver(percentage);

  return (
    <li
      className="flex items-center gap-4"
      data-aos="fade-up"
      data-aos-duration="1500"
      ref={elementRef}
    >
      <div className="w-20">
        <img src={img} alt={name} />
      </div>
      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xl font-semibold">{name}</p>
          <span className="text-cyan-800">
            {currentPercentage} <span>%</span>
          </span>
        </div>
        <ul className="mb-5">
          {description.map((desc, index) => (
            <li key={index} className="text-sm">
              {desc}
            </li>
          ))}
        </ul>
        <div className="bg-gray-100 bg-opacity-20">
          <span
            className="relative block h-[2px] bg-cyan-800"
            style={{ width: `${currentPercentage}%` }}
          >
            <span className="absolute right-0 top-[-12px] h-[25px] w-[25px] rounded-3xl border-2 bg-cyan-800"></span>
          </span>
        </div>
      </div>
    </li>
  );
};

export default SkillCard;
