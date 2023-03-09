import React from "react";

import { Resizable } from "re-resizable";
import { Link } from "react-router-dom";
import { BsHouseHeart } from "react-icons/bs";
import { RiDiscLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";

const SideBar: React.FC = () => {
  return (
    <Resizable
      className="sidebar"
      defaultSize={{
        width: 200,
        height: "100%",
      }}
      minWidth={170}
      maxWidth={300}
    >
      <ul className="sidebar__navigation">
        <li className="sidebar__link--home">
          <BsHouseHeart />
          <Link to={"/home"}>Home</Link>
        </li>
        <li className="sidebar__link--playlists">
          <RiDiscLine />
          <Link to={"/playlists"}>My playlists</Link>
        </li>
        <li className="sidebar__link--search">
          <BiSearchAlt />
          <Link to={"/search"}>Search</Link>
        </li>
      </ul>
    </Resizable>
  );
};

export default SideBar;
