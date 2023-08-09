import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type SectionStore = {
  activeSection: SectionName;
  timeOfLastClick: number;
  setActiveSection: (activeSection: SectionName) => void;
  setTimeOfLastClick: (timeOfLastClick: number) => void;
};
