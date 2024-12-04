import { Checkbox } from "@/components/ui/checkbox";
import { techStackListData } from "@/features/Project/data/techStackListData";

export function CheckboxTechStack() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {techStackListData.map((techStack) => (
        <div key={techStack} className="flex items-center gap-2">
          <Checkbox id={techStack} />
          <label
            htmlFor={techStack}
            className="min-w-24 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {techStack}
          </label>
        </div>
      ))}
    </div>
  );
}
