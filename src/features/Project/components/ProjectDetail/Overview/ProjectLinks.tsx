import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { ProjectData } from "@/features/Project/types/type";

const ProjectLinks = ({
  urls,
  editable = false,
  onChange,
}: {
  urls: Partial<ProjectData>;
  editable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const links = [
    { label: "배포 사이트", name: "demoUrl", value: urls.demoUrl },
    { label: "깃허브", name: "githubUrl", value: urls.githubUrl },
    { label: "Canva", name: "canvaUrl", value: urls.canvaUrl },
    { label: "Figma", name: "figmaUrl", value: urls.figmaUrl },
    { label: "Swagger", name: "swaggerUrl", value: urls.swaggerUrl },
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {links.map((link) =>
        editable ? (
          <InputWithLabel key={link.name} label={link.label} name={link.name} value={link.value || ""} />
        ) : (
          <Button variant="secondary" asChild>
            <a key={link.name} href={link.value || "#"} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </Button>
        ),
      )}
    </div>
  );
};

export default ProjectLinks;
