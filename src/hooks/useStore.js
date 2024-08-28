import { create } from "zustand";

export const useStore = create((set, get) => ({
    camPosition: [10, 10, 10],
    setCamPosition: (camPosition) =>
      set((state) => ({ camPosition: camPosition })),
    target: [0, 0, 0],
    setTarget: (target) => set((state) => ({ target })),
  }));