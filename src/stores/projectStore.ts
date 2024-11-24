import { PreviewFormData } from "@/features/Project/types/type";
import { initFormData } from "@/features/Project/data/initFormData";
import { create } from "zustand";

interface FormStore {
  forms: PreviewFormData;
  setForm: (form: PreviewFormData) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  forms: initFormData,
  setForm: (form) => set(() => ({ forms: form })),
}));
