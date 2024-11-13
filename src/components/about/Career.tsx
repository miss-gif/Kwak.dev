import { education } from "@/data";

const Career = () => {
  const trainingData = education[1].training;

  return (
    <ul className="mt-16 flex flex-col gap-32">
      {trainingData?.map((training, index) => (
        <li
          key={index}
          className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-center"
        >
          {/* 기업로고 영역 */}
          <div className="m-auto md:m-0 md:my-4">
            <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full shadow-md">
              <img
                className="h-40 w-40 object-cover"
                src={training.logo}
                alt={`${training.institution} logo`}
              />
            </div>
          </div>

          {/* 활동내역 영역 */}
          <div className="w-full border-l-4 py-4 pl-12 lg:border-gray-100">
            <div>
              <div className="mb-4 flex flex-col gap-2">
                <h4 className="text-2xl font-semibold">
                  {training.institution}
                </h4>
                <time>{training.duration}</time>
                <p className="leading-relaxed">{training.course}</p>
              </div>
              <div className="flex flex-col gap-10">
                {training.projects.map((project, projIndex) => (
                  <div key={projIndex}>
                    <div className="flex flex-col gap-3">
                      <h5 className="font-semibold">✨ {project.title}</h5>
                      <time>{project.date}</time>
                      <p className="leading-6">{project.description}</p>
                      <p className="leading-relaxed">
                        기술 스택: {project.techStack.join(", ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Career;
