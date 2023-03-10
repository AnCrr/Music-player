import React, { useState, useEffect } from "react";
import { fetchAccessToken } from "./AuthPage";
import axios, { AxiosResponse } from "axios";
import {
  useMeState,
  usePlaylistsState,
  useCategoriesState,
} from "../components/states";
import SideBar from "../components/SideBar";

interface IUser {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: [
    {
      url: string;
      height: number;
      width: number;
    }
  ];
  product: string;
  type: string;
  uri: string;
}

const Home = () => {
  // const [playlists, setPlaylists] = useState([]);
  const [user, setUser] = useState({});
  const code = new URL(window.location.href).searchParams.get("code");

  const { setGeneral } = useMeState((state) => ({
    setGeneral: state.setGeneral,
  }));
  const { setPlaylists } = usePlaylistsState((state) => ({
    setPlaylists: state.setPlaylists,
  }));
  const { setCategories } = useCategoriesState((state) => ({
    setCategories: state.setCategories,
  }));

  const accessToken = localStorage.getItem("accessToken");

  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  useEffect(() => {
    const getMyUserData = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me",
          options
        );
        setUser(response.data);
        setGeneral({
          name: response.data.display_name,
          image: response.data.images[0].url,
        });
      } catch (error) {
        console.error("Error getting my user data", error);
      }
    };
    const getMyPlaylists = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/playlists",
          options
        );
        setPlaylists(response.data.items);
      } catch (error) {
        console.error("Error getting my playlists", error);
      }
    };
    const getCatefories = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/browse/categories",
          options
        );
        setCategories(response.data.categories.items);
      } catch (error) {
        console.error("Error getting my playlists", error);
      }
    };

    if (accessToken) {
      getMyUserData();
      getMyPlaylists();
      getCatefories();
    }
  }, []);

  const fetchToken = async () => {
    await fetchAccessToken(code);
  };
  if (code) {
    fetchToken();
  }

  return (
    <div className="home">
      {/* <div className="sidebar">sidebar</div> */}

      <div className="content">content</div>
    </div>
  );
};

export default Home;
