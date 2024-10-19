import { create } from "zustand";
import { INITIAL_BOX_DATA } from "../data/objectsData";

export const useStore = create((set, get) => ({
    camPosition: [1, 1, 1],
    setCamPosition: (newPosition) =>
      set((state) => ({ camPosition: newPosition })),
    target: INITIAL_BOX_DATA,
    setTarget: (target) => set((state) => ({ target : target ?? INITIAL_BOX_DATA })),
  }));