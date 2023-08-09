import { SectionName, SectionStore } from "@/lib/types";
import { create } from "zustand";

export const useSectionScroll = create<SectionStore>()((set) => ({
  activeSection: "Home",
  timeOfLastClick: 0,
  setActiveSection: (activeSection: SectionName) =>
    set(() => ({ activeSection })),
  setTimeOfLastClick: (timeOfLastClick: number) => set({ timeOfLastClick }),
}));
