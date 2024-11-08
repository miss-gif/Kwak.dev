import Project from "@/components/project/Project";
import ProjectFilter from "@/components/project/ProjectFilter";
import Section from "@/components/sections/Section";
import { ProjectData } from "@/types/projectData";

const data: ProjectData[] = [
  {
    thumbnail: "https://example.com/thumbnail.jpg",
    title: "Portfolio Website Project",
    duration: "2023.01 - 2023.03",
    teamSize: 4,
    description: "A portfolio site showcasing my web development projects.",
    techStack: ["React", "TypeScript", "CSS", "Node.js"],
    links: {
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/portfolio-project",
      additionalUrls: {
        canvaUrl: "https://canva.com/project-design",
        figmaUrl: "https://figma.com/project-mockup",
      },
    },
    client: "Personal Project",
    planning: "John Doe",
    design: "Jane Smith",
    publishing: "Alice Brown",
    development: "Bob White",
    goal: "To create a visually appealing portfolio site to showcase development skills.",
    features: [
      "Responsive design for all devices",
      "Dynamic project display with animations",
      "Integrated contact form with email support",
    ],
    technology:
      "Used React with TypeScript for frontend, and Node.js for backend API.",
    result: "Successfully deployed and accessible with fast load times.",
    achievement: "Increased visibility and secured three freelance projects.",
  },
  {
    thumbnail: "https://example.com/thumbnail.jpg",
    title: "Portfolio Website Project",
    duration: "2023.01 - 2023.03",
    teamSize: 4,
    description: "A portfolio site showcasing my web development projects.",
    techStack: ["React", "TypeScript", "CSS", "Node.js"],
    links: {
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/portfolio-project",
      additionalUrls: {
        canvaUrl: "https://canva.com/project-design",
        figmaUrl: "https://figma.com/project-mockup",
      },
    },
    client: "Personal Project",
    planning: "John Doe",
    design: "Jane Smith",
    publishing: "Alice Brown",
    development: "Bob White",
    goal: "To create a visually appealing portfolio site to showcase development skills.",
    features: [
      "Responsive design for all devices",
      "Dynamic project display with animations",
      "Integrated contact form with email support",
    ],
    technology:
      "Used React with TypeScript for frontend, and Node.js for backend API.",
    result: "Successfully deployed and accessible with fast load times.",
    achievement: "Increased visibility and secured three freelance projects.",
  },
  {
    thumbnail: "https://example.com/thumbnail.jpg",
    title: "Portfolio Website Project",
    duration: "2023.01 - 2023.03",
    teamSize: 4,
    description: "A portfolio site showcasing my web development projects.",
    techStack: ["React", "TypeScript", "CSS", "Node.js"],
    links: {
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/portfolio-project",
      additionalUrls: {
        canvaUrl: "https://canva.com/project-design",
        figmaUrl: "https://figma.com/project-mockup",
      },
    },
    client: "Personal Project",
    planning: "John Doe",
    design: "Jane Smith",
    publishing: "Alice Brown",
    development: "Bob White",
    goal: "To create a visually appealing portfolio site to showcase development skills.",
    features: [
      "Responsive design for all devices",
      "Dynamic project display with animations",
      "Integrated contact form with email support",
    ],
    technology:
      "Used React with TypeScript for frontend, and Node.js for backend API.",
    result: "Successfully deployed and accessible with fast load times.",
    achievement: "Increased visibility and secured three freelance projects.",
  },
  {
    thumbnail: "https://example.com/thumbnail.jpg",
    title: "Portfolio Website Project",
    duration: "2023.01 - 2023.03",
    teamSize: 4,
    description: "A portfolio site showcasing my web development projects.",
    techStack: ["React", "TypeScript", "CSS", "Node.js"],
    links: {
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/portfolio-project",
      additionalUrls: {
        canvaUrl: "https://canva.com/project-design",
        figmaUrl: "https://figma.com/project-mockup",
      },
    },
    client: "Personal Project",
    planning: "John Doe",
    design: "Jane Smith",
    publishing: "Alice Brown",
    development: "Bob White",
    goal: "To create a visually appealing portfolio site to showcase development skills.",
    features: [
      "Responsive design for all devices",
      "Dynamic project display with animations",
      "Integrated contact form with email support",
    ],
    technology:
      "Used React with TypeScript for frontend, and Node.js for backend API.",
    result: "Successfully deployed and accessible with fast load times.",
    achievement: "Increased visibility and secured three freelance projects.",
  },
];

const ProjectPage = () => {
  return (
    <Section>
      <div className="flex flex-col">
        <ProjectFilter data={data} />
        <Project data={data} />
      </div>
    </Section>
  );
};

export default ProjectPage;
