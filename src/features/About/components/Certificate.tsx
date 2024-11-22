import { personalInfo } from "@/data";

const Certificate = () => {
  const certifications = personalInfo.certifications;

  return (
    <ul className="mt-16 flex w-full flex-col gap-4">
      {certifications.map((certification, index) => (
        <li
          key={index}
          className="shadow-style rounded-md border border-gray-300 p-6"
        >
          <h3 className="text-xl font-semibold">{certification.name}</h3>
          <div className="mt-2">
            <time dateTime={certification.date} className="block text-sm">
              {certification.date}
            </time>
            <span className="block text-sm">{certification.organization}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Certificate;
