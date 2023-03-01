import { create } from "zustand";

interface IMeState {
  general: {
    name: string | undefined;
    image: string | undefined;
  } | null;
  setGeneral: (value: any) => void;
  // setName: (value: any) => void;
  // setImage: (value: any) => void;
}

export const useMeState = create<IMeState>((set) => ({
  // name: null,
  // image: null,
  general: null,
  setGeneral: (value: any) => set(() => ({ general: value })),
  // setName: (value: any) => set(() => ({ name: value })),
  // setImage: (value: any) => set(() => ({ image: value })),
}));
