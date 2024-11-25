import { initFormData } from "@/features/Project/data/initFormData";
import { ProjectData } from "@/features/Project/types/type";
import { create } from "zustand";

interface FormStore {
  forms: ProjectData;
  setForm: (form: ProjectData) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  forms: initFormData,
  setForm: (form) => set(() => ({ forms: form })),
}));
