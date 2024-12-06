import { z } from "zod";

export const projectSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  description: z.string().optional(),
  thumbnail: z.string().url("Thumbnail must be a valid URL").optional(),
  client: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  teamSize: z.number().min(1, "Team size must be at least 1").optional(),
  planning: z.string().optional(),
  design: z.string().optional(),
  publishing: z.string().optional(),
  development: z.string().optional(),
  badgeProjectDevice: z.string().optional(),
  badgeProjectType: z.string().optional(),
  badgeParticipation: z.string().optional(),
  urls: z.array(z.string().url()).optional(),
});
