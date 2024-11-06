import { education } from "@/data";
import styled from "@emotion/styled";

const Career = () => {
  const trainingData = education[1].training;

  return (
    <ul className="mt-16 flex flex-col gap-32">
      {trainingData?.map((training, index) => (
        <li key={index} className="flex flex-col gap-12 lg:flex-row">
          {/* 기업로고 영역 */}
          <div className="m-auto">
            <LogoStyled>
              <img src={training.logo} alt={`${training.institution} logo`} />
            </LogoStyled>
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

const LogoStyled = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  img {
    width: 180px;
    height: 180px;
    object-fit: contain;
  }
`;
