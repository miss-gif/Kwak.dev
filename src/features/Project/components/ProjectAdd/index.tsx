import AdminAuthButton from "@/components/Button/Admin-Auth-Button";
import StickyBottomSubmit from "@/components/Button/StickyBottomSubmit";
import { Badge } from "@/components/ui/badge";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import useProjectAdd from "@/hooks/project/use-Project-Add";
import Inner from "@/layouts/Inner";
import { projectSchema } from "@/schema/project-Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { initFormData } from "../../data/initFormData";
import { ProjectData } from "../../types/type";
import Description from "../ProjectDetail/Description";
import { TechStackModal } from "../ProjectDetail/Overview/TechStackModal";
import RadioGroup from "../ProjectForm/RadioGroup";
import { ProjectCreate } from "../ProjectHeaderButton";

const ProjectAdd = () => {
  const { handleCreateData } = useProjectAdd();
  const [editMode] = useState(true);
  const [formData, setFormData] = useState<ProjectData>(initFormData);

  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      docId: "",
      id: 0,
      projectName: "",
      description: "",
      badgeProjectDevice: "",
      badgeProjectType: "",
      badgeParticipation: "",
      thumbnail: "https://via.placeholder.com/500.jpg",
      startDate: "",
      endDate: "",
      techStack: [],
      client: "",
      teamSize: "",
      planning: "",
      design: "",
      publishing: "",
      development: "",
      demoUrl: "",
      githubUrl: "",
      canvaUrl: "",
      figmaUrl: "",
      swaggerUrl: "",
    },
    resolver: zodResolver(projectSchema),
  });

  const handleFormReset = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleCreateData)}>
      <ProjectCreate handleFormReset={handleFormReset} />
      <Inner className="flex-col">
        <div className="overview mb-8 w-full">
          <div className="grid w-full gap-4 py-4">
            <Controller
              name="projectName"
              control={control}
              render={({ field }) => <InputWithLabel label="프로젝트 이름" {...field} />}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => <InputWithLabel label="설명" {...field} />}
            />
          </div>

          <div className="flex w-full flex-col gap-4 xl:flex-row">
            <div className="w-full shrink-0 bg-red-300 xl:w-2/5">
              <div className="grid gap-4">
                <div className="h-48 shrink-0 overflow-hidden rounded-md">
                  <img src="https://via.placeholder.com/500.jpg" alt={`thumbnail`} className="w-full" />
                </div>
                <Controller
                  name="thumbnail"
                  control={control}
                  render={({ field }) => <InputWithLabel label="썸네일 URL" {...field} />}
                />
                <Controller
                  name="badgeProjectDevice"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup label="디바이스 지원" options={["반응형", "데스크탑"]} {...field} />
                  )}
                />
                <Controller
                  name="badgeProjectType"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup label="프로젝트 유형" options={["퍼블리싱", "프론트엔드", "풀스택"]} {...field} />
                  )}
                />
                <Controller
                  name="badgeParticipation"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup label="참여 형태" options={["개인", "협업", "스터디"]} {...field} />
                  )}
                />

                {/* 기술스택 */}
                <Controller
                  name="techStack"
                  control={control}
                  render={({ field }) => <TechStackModal label="기술스택" {...field} />}
                />
                <div>
                  <Badge>techStack.ma</Badge>
                </div>
                <Controller
                  name="techStack"
                  control={control}
                  render={({ field }) => <InputWithLabel label="기술스택" {...field} />}
                />
              </div>
            </div>

            <div className="grid w-full gap-4 bg-sky-300">
              <div className="grid gap-2">
                <Controller
                  name="client"
                  control={control}
                  render={({ field }) => <InputWithLabel label="클라이언트" {...field} />}
                />
                <div className="flex gap-2">
                  <Controller
                    name="startDate"
                    control={control}
                    render={({ field }) => <InputWithLabel label="작업시작" {...field} />}
                  />
                  <Controller
                    name="endDate"
                    control={control}
                    render={({ field }) => <InputWithLabel label="작업종료" {...field} />}
                  />
                </div>
                <Controller
                  name="teamSize"
                  control={control}
                  render={({ field }) => <InputWithLabel label="참여인원" {...field} />}
                />
              </div>

              {/*  */}
              <div className="gap- grid grid-cols-2 gap-2">
                <Controller
                  name="planning"
                  control={control}
                  render={({ field }) => <InputWithLabel label="기획" {...field} />}
                />
                <Controller
                  name="design"
                  control={control}
                  render={({ field }) => <InputWithLabel label="디자인" {...field} />}
                />
                <Controller
                  name="publishing"
                  control={control}
                  render={({ field }) => <InputWithLabel label="퍼블리싱" {...field} />}
                />
                <Controller
                  name="development"
                  control={control}
                  render={({ field }) => <InputWithLabel label="개발" {...field} />}
                />
              </div>

              {/*  */}
              <div className="grid grid-cols-2 gap-2">
                <Controller
                  name="demoUrl"
                  control={control}
                  render={({ field }) => <InputWithLabel label="배포" {...field} />}
                />
                <Controller
                  name="githubUrl"
                  control={control}
                  render={({ field }) => <InputWithLabel label="깃허브" {...field} />}
                />
                <Controller
                  name="canvaUrl"
                  control={control}
                  render={({ field }) => <InputWithLabel label="Canva" {...field} />}
                />
                <Controller
                  name="figmaUrl"
                  control={control}
                  render={({ field }) => <InputWithLabel label="Figma" {...field} />}
                />
                <Controller
                  name="swaggerUrl"
                  control={control}
                  render={({ field }) => <InputWithLabel label="Swagger" {...field} />}
                />
              </div>
            </div>
          </div>
        </div>

        <Description formData={formData} setFormData={setFormData} editMode={editMode} />

        <StickyBottomSubmit>
          <AdminAuthButton
            type="submit"
            label="프로젝트 저장하기"
            width="w-full"
            onClick={() => {
              console.log(watch());
              handleCreateData(watch());
            }}
          />
        </StickyBottomSubmit>
      </Inner>
    </form>
  );
};

export default ProjectAdd;
