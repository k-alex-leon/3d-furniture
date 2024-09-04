import { create } from "zustand";

export const useStore = create((set, get) => ({
    camPosition: [10, 10, 10],
    setCamPosition: (newPosition) =>
      set((state) => ({ camPosition: newPosition })),
    target: [0, 0, 0],
    setTarget: (target) => set((state) => ({ target })),
  }));