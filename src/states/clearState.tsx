import { create } from "zustand";

export const useToggleStore = create((set) => ({
  toggle: false,
  closeToggle: () => set((state: any) => ({ toggle: (state.toggle = false) })),
  openToggle: () => set((state: any) => ({ toggle: (state.toggle = true) })),
}));
