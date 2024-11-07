import { AnimatePresence, motion } from "framer-motion";
import Fuse from "fuse.js";
import { useState } from "react";
import Select from "react-select";

// 샘플 포트폴리오 데이터
const projectData = [
  { id: 1, title: "React Project", tags: ["React", "JavaScript"] },
  { id: 2, title: "Node.js API", tags: ["Node.js", "API"] },
  { id: 3, title: "Full Stack App", tags: ["React", "Node.js", "MongoDB"] },
  { id: 4, title: "E-commerce", tags: ["React", "Redux", "Firebase"] },
];

// 태그 옵션
const tagOptions = [
  { value: "React", label: "React" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Node.js", label: "Node.js" },
  { value: "API", label: "API" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "Redux", label: "Redux" },
  { value: "Firebase", label: "Firebase" },
];

const ProjectFilter = () => {
  const [selectedTags, setSelectedTags] = useState<
    { value: string; label: string }[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fuse.js 설정
  const fuse = new Fuse(projectData, {
    keys: ["title", "tags"],
    threshold: 0.3,
  });

  // 검색 및 필터링 결과 처리
  const filteredData = fuse
    .search(searchQuery)
    .map((result) => result.item)
    .filter((item) =>
      selectedTags.length > 0
        ? selectedTags.every((tag) => item.tags.includes(tag.value))
        : true,
    );

  return (
    <div>
      {/* 검색 입력 */}
      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
      />

      {/* 태그 필터 */}
      <Select
        isMulti
        options={tagOptions}
        value={selectedTags}
        onChange={(newValue) =>
          setSelectedTags(newValue as { value: string; label: string }[])
        }
        placeholder="Filter by tags"
        styles={{ container: (base) => ({ ...base, marginBottom: "20px" }) }}
      />

      {/* 필터링된 결과 목록 */}
      <div>
        <AnimatePresence>
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{
                padding: "15px",
                margin: "10px 0",
                background: "#f5f5f5",
                borderRadius: "8px",
              }}
            >
              <h3>{item.title}</h3>
              <p>Tags: {item.tags.join(", ")}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectFilter;
