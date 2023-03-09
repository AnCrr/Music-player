import React from "react";
import { usePlaylistsState } from "../components/states";
import PlaylistCard from "../components/PlaylistCard";

const Playlists = () => {
  const { playlists } = usePlaylistsState((state) => ({
    playlists: state.playlists,
  }));
  console.log("playlists", playlists);

  return (
    <div className="playlists">
      {playlists.map((playlist) => (
        <PlaylistCard data={playlist} />
      ))}
    </div>
  );
};

export default Playlists;
