import React, { useState } from "react";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    card: {
      badge: [""],
      thumbnail: "",
      title: "",
      duration: {
        startDate: "",
        endDate: "",
      },
      teamSize: "",
      description: "",
      techStack: [""],
      links: {
        demoUrl: "",
        githubUrl: "",
        additionalUrls: [{ name: "", url: "" }],
      },
      client: "",
      team: {
        planner: "",
        designer: "",
        publisher: "",
        developer: "",
      },
    },
    detail: {
      goal: [{ title: "", details: [""] }],
      features: [{ title: "", details: [""] }],
      technology: [{ title: "", details: [""] }],
      result: [{ title: "", details: [""] }],
      achievement: [{ title: "", details: [""] }],
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    if (keys.length === 1) {
      setFormData((prevData) => ({
        ...prevData,
        [keys[0]]: value,
      }));
    } else if (keys.length === 2) {
      setFormData((prevData) => ({
        ...prevData,
        [keys[0]]: {
          ...prevData[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else if (keys.length === 3) {
      setFormData((prevData) => ({
        ...prevData,
        [keys[0]]: {
          ...prevData[keys[0]],
          [keys[1]]: {
            ...prevData[keys[0]][keys[1]],
            [keys[2]]: value,
          },
        },
      }));
    } else if (keys.length === 4) {
      setFormData((prevData) => ({
        ...prevData,
        [keys[0]]: {
          ...prevData[keys[0]],
          [keys[1]]: {
            ...prevData[keys[0]][keys[1]],
            [keys[2]]: prevData[keys[0]][keys[1]][keys[2]].map(
              (item, index) => {
                return index === parseInt(keys[3]) ? value : item;
              },
            ),
          },
        },
      }));
    }
  };

  const handleArrayChange = (e, section, index) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    setFormData((prevData) => ({
      ...prevData,
      [section]: prevData[section].map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            [keys[1]]: value,
          };
        }
        return item;
      }),
    }));
  };

  const handleAddBadge = () => {
    setFormData((prevData) => ({
      ...prevData,
      card: {
        ...prevData.card,
        badge: [...prevData.card.badge, ""],
      },
    }));
  };

  const handleAddTechStack = () => {
    setFormData((prevData) => ({
      ...prevData,
      card: {
        ...prevData.card,
        techStack: [...prevData.card.techStack, ""],
      },
    }));
  };

  const handleAddLink = () => {
    setFormData((prevData) => ({
      ...prevData,
      card: {
        ...prevData.card,
        links: {
          ...prevData.card.links,
          additionalUrls: [
            ...prevData.card.links.additionalUrls,
            { name: "", url: "" },
          ],
        },
      },
    }));
  };

  const handleAddDetailSection = (section) => {
    setFormData((prevData) => ({
      ...prevData,
      detail: {
        ...prevData.detail,
        [section]: [...prevData.detail[section], { title: "", details: [""] }],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2)); // JSON 형식으로 출력
  };

  return (
    <div className="mx-auto max-w-3xl p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ID 입력 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            아이디
          </label>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* 카드 정보 입력 */}
        <div>
          <h2 className="text-lg font-semibold">카드 정보</h2>

          {/* 배지 입력 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              배지
            </label>
            {formData.card.badge.map((badge, index) => (
              <div key={index} className="flex space-x-2">
                <input
                  type="text"
                  name={`card.badge.${index}`}
                  value={badge}
                  onChange={(e) => handleArrayChange(e, "card.badge", index)}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddBadge}
              className="mt-2 rounded-md bg-blue-500 p-2 text-white"
            >
              배지 추가
            </button>
          </div>

          {/* 썸네일, 제목, 설명 등 입력 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              썸네일 URL
            </label>
            <input
              type="text"
              name="card.thumbnail"
              value={formData.card.thumbnail}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              제목
            </label>
            <input
              type="text"
              name="card.title"
              value={formData.card.title}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
            />
          </div>

          {/* 기간 */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                시작일
              </label>
              <input
                type="date"
                name="card.duration.startDate"
                value={formData.card.duration.startDate}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                종료일
              </label>
              <input
                type="date"
                name="card.duration.endDate"
                value={formData.card.duration.endDate}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
          </div>

          {/* 기술 스택 입력 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              기술 스택
            </label>
            {formData.card.techStack.map((tech, index) => (
              <div key={index} className="flex space-x-2">
                <input
                  type="text"
                  name={`card.techStack.${index}`}
                  value={tech}
                  onChange={(e) =>
                    handleArrayChange(e, "card.techStack", index)
                  }
                  className="mt-1 w-full rounded-md border border-gray-300 p-2"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddTechStack}
              className="mt-2 rounded-md bg-blue-500 p-2 text-white"
            >
              기술 스택 추가
            </button>
          </div>

          {/* 링크 입력 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              링크
            </label>
            {formData.card.links.additionalUrls.map((url, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="text"
                  name={`card.links.additionalUrls.${index}.name`}
                  value={url.name}
                  onChange={(e) =>
                    handleArrayChange(e, "card.links.additionalUrls", index)
                  }
                  placeholder="링크 이름"
                  className="mt-1 w-full rounded-md border border-gray-300 p-2"
                />
                <input
                  type="text"
                  name={`card.links.additionalUrls.${index}.url`}
                  value={url.url}
                  onChange={(e) =>
                    handleArrayChange(e, "card.links.additionalUrls", index)
                  }
                  placeholder="URL"
                  className="mt-1 w-full rounded-md border border-gray-300 p-2"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddLink}
              className="mt-2 rounded-md bg-blue-500 p-2 text-white"
            >
              링크 추가
            </button>
          </div>

          {/* 클라이언트 및 팀 구성원 입력 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              클라이언트
            </label>
            <input
              type="text"
              name="card.client"
              value={formData.card.client}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
            />
          </div>

          {/* 팀 */}
          <div>
            <h3 className="font-medium">팀 구성원</h3>
            <div className="space-y-2">
              <input
                type="text"
                name="card.team.planner"
                value={formData.card.team.planner}
                onChange={handleChange}
                placeholder="기획자"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
              <input
                type="text"
                name="card.team.designer"
                value={formData.card.team.designer}
                onChange={handleChange}
                placeholder="디자이너"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
              <input
                type="text"
                name="card.team.publisher"
                value={formData.card.team.publisher}
                onChange={handleChange}
                placeholder="퍼블리셔"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
              <input
                type="text"
                name="card.team.developer"
                value={formData.card.team.developer}
                onChange={handleChange}
                placeholder="개발자"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
          </div>
        </div>

        {/* 세부 사항 (goal, features, technology, result, achievement) */}
        {["goal", "features", "technology", "result", "achievement"].map(
          (section) => (
            <div key={section}>
              <h3 className="text-lg font-semibold">{section}</h3>
              {formData.detail[section].map((item, index) => (
                <div key={index} className="space-y-2">
                  <input
                    type="text"
                    name={`detail.${section}.${index}.title`}
                    value={item.title}
                    onChange={(e) => handleArrayChange(e, "detail", index)}
                    placeholder={`${section} 제목`}
                    className="mt-1 w-full rounded-md border border-gray-300 p-2"
                  />
                  {item.details.map((detail, detailIndex) => (
                    <input
                      key={detailIndex}
                      type="text"
                      name={`detail.${section}.${index}.details.${detailIndex}`}
                      value={detail}
                      onChange={(e) => handleArrayChange(e, "detail", index)}
                      placeholder={`${section} 세부 사항`}
                      className="mt-1 w-full rounded-md border border-gray-300 p-2"
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAddDetailSection(section)}
                    className="mt-2 rounded-md bg-blue-500 p-2 text-white"
                  >
                    {section} 항목 추가
                  </button>
                </div>
              ))}
            </div>
          ),
        )}

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="mt-4 rounded-md bg-blue-500 p-2 text-white"
        >
          JSON 출력
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
