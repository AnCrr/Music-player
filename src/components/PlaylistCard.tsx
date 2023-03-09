import React from "react";

const PlaylistCard = ({ data }) => {
  const cover = data.images[0].url;
  return (
    <div className="playlist-card">
      <img className="playlist-card__cover" src={cover} />
      <span>{data.name}</span>
    </div>
  );
};

export default PlaylistCard;
