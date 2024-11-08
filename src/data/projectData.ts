import { ProjectData } from "@/types/projectData";

export const projectData: ProjectData[] = [
  {
    id: 1,
    card: {
      thumbnail: "https://example.com/thumbnail.jpg",
      title: "Portfolio Website Project",
      duration: {
        startDate: new Date("2023-01-01"),
        endDate: new Date("2023-03-01"),
      },
      teamSize: 4,
      description: "A portfolio site showcasing my web development projects.",
      techStack: ["React", "TypeScript", "CSS", "Node.js"],
      links: {
        demoUrl: "https://example.com/demo",
        githubUrl: "https://github.com/example/portfolio-project",
        additionalUrls: [
          { name: "Canva", url: "https://canva.com/project-design" },
          { name: "Figma", url: "https://figma.com/project-mockup" },
        ],
      },
      client: "Personal Project",
      team: {
        planner: "John Doe",
        designer: "Jane Smith",
        publisher: "Alice Brown",
        developer: "Bob White",
      },
    },
    detail: {
      goal: [
        {
          title: "Create a visually appealing portfolio site",
          details: ["To showcase development skills"],
        },
      ],
      features: [
        {
          title: "Responsive design",
          details: ["Works on desktop and mobile seamlessly"],
        },
      ],
      technology: [
        {
          title: "React + TypeScript",
          details: ["Used for building the UI and component structure"],
        },
      ],
      result: [
        {
          title: "Increased engagement",
          details: ["Received positive feedback on usability and design"],
        },
      ],
      achievement: [
        {
          title: "Skill improvement",
          details: ["Gained experience with React and TypeScript"],
        },
      ],
    },
  },
];
