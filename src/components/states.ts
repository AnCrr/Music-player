import { create } from "zustand";

interface IMeState {
  general: {
    name: string | undefined;
    image: string | undefined;
  } | null;
  setGeneral: (value: any) => void;
}

interface ICategoryIcon {
  height: number;
  url: string;
  width: number;
}

export interface ICategory {
  href: string;
  icons: ICategoryIcon[];
  id: string;
  name: string;
}

interface IPlaylistImage {
  height: number;
  url: string;
  width: number;
}
interface IPlaylistTracks {
  href: string;
  total: 4;
}
interface IPlaylistExternalUrls {
  spotify: string;
}
interface IPlaylistOwner {
  display_name: string;
  external_urls: IPlaylistExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}
export interface IPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: IPlaylistExternalUrls;
  href: string;
  id: string;
  images: IPlaylistImage[];
  name: string;
  owner: IPlaylistOwner;
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: IPlaylistTracks;
  type: string;
  uri: string;
}
interface ICategoriesState {
  categories: ICategory[];
  setCategories: (value: ICategory[]) => void;
}
interface IPlaylistsState {
  playlists: IPlaylist[];
  setPlaylists: (value: IPlaylist[]) => void;
}

export const useMeState = create<IMeState>((set) => ({
  general: null,
  setGeneral: (value: any) => set(() => ({ general: value })),
}));
export const usePlaylistsState = create<IPlaylistsState>((set) => ({
  playlists: [],
  setPlaylists: (value: any) => set(() => ({ playlists: value })),
}));
export const useCategoriesState = create<ICategoriesState>((set) => ({
  categories: [],
  setCategories: (value: any) => set(() => ({ categories: value })),
}));
