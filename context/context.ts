import { create } from "zustand";

interface showNavProps {
  showNav: boolean,
  setShowNav: (showNav: boolean) => void
}

export const useShowStore = create<showNavProps>()((set) => ({
  showNav: true,
  setShowNav: (showNav: boolean) => set({ showNav })
}))