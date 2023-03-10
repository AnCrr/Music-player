import React from "react";
import { usePlaylistsState } from "../components/states";
import PlaylistCard from "../components/PlaylistCard";

const Playlists = () => {
  const { playlists } = usePlaylistsState((state) => ({
    playlists: state.playlists,
  }));

  return (
    <div className="playlists">
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default Playlists;
