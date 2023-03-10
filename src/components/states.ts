import { create } from "zustand";

interface IMeState {
  general: {
    name: string | undefined;
    image: string | undefined;
  } | null;
  setGeneral: (value: any) => void;
}

export const useMeState = create<IMeState>((set) => ({
  general: null,
  setGeneral: (value: any) => set(() => ({ general: value })),
}));
export const usePlaylistsState = create((set) => ({
  playlists: [],
  setPlaylists: (value: any) => set(() => ({ playlists: value })),
}));
export const useCategoriesState = create((set) => ({
  categories: [],
  setCategories: (value: any) => set(() => ({ categories: value })),
}));
