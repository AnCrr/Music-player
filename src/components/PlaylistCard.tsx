import React from "react";
import { IPlaylist } from "../components/states";

interface IProps {
  key: string;
  playlist: IPlaylist;
}

const PlaylistCard = ({ playlist }: IProps) => {
  const { name, images } = playlist;
  const cover = images[0].url;
  return (
    <div className="playlist-card">
      <img className="playlist-card__cover" src={cover} />
      <span>{name}</span>
    </div>
  );
};

export default PlaylistCard;
