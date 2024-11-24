import { PreviewFormData } from "@/features/Project/components/ProjectAdd/type";
import { create } from "zustand";

interface FormStore {
  forms: PreviewFormData | null;
  setForm: (form: PreviewFormData) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  forms: null,
  setForm: (form) => set(() => ({ forms: form })),
}));
