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
      className="skills__item"
      data-aos="fade-up"
      data-aos-duration="1500"
      ref={elementRef}
    >
      <div className="skills__item__img-wrapper">
        <img src={img} alt={name} />
      </div>
      <div className="skills__item__info">
        <div className="skills__titles">
          <h3 className="skills__name">{name}</h3>
          <span className="skills__number">
            {currentPercentage} <span>%</span>
          </span>
        </div>
        <ul className="skills__description">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        <div className="skills__bar">
          <span
            className="skills__percentage"
            style={{ width: `${currentPercentage}%` }}
          >
            <span></span>
          </span>
        </div>
      </div>
    </li>
  );
};

export default SkillCard;
