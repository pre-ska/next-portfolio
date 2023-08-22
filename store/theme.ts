"useClient";

import { create } from "zustand";

export type themeStateProp = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const useTheme = create<themeStateProp>()((set) => ({
  isDark: false,
  //   isDark: window.matchMedia("(prefers-color-scheme:dark)").matches,
  toggleTheme: () =>
    set((state: themeStateProp) => {
      window.localStorage.setItem(
        "portfolio-theme-storage",
        JSON.stringify(!state.isDark)
      );

      return { isDark: !state.isDark };
    }),
}));
