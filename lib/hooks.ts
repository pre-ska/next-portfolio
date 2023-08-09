import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName, SectionStore } from "./types";
import { useSectionScroll } from "@/store/sectionScroll";
import { shallow } from "zustand/shallow";

export function useSectionInView(sectionName: SectionName, threshold = 0.65) {
  const { ref, inView } = useInView({ threshold });

  const { setActiveSection, timeOfLastClick } = useSectionScroll(
    (state: SectionStore) => ({
      setActiveSection: state.setActiveSection,
      timeOfLastClick: state.timeOfLastClick,
    }),
    shallow
  );
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
