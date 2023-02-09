import React, { useState, useEffect } from "react";
import { RouteProps } from "react-router-dom";
import axios from "axios";

const clientId = "a31872714b454efda5867bca835d3846";
const clientSecret = "a71669917cf648c3b3e95919ffd3ba3a";
const redirectUri = "http://localhost:5173/test";
const scopes = ["user-read-private", "user-read-email"];

const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;

const makeAuthorizedRequest = async (accessToken: string) => {
  console.log("it worked");

  const accessResponse = await axios.get(
    "https://api.spotify.com/v1/me",

    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return accessResponse;
};

export const fetchAccessToken = async (code) => {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    {
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      },
    }
  );
  const accessToken = response.data.access_token;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("expiresAt", (Date.now() + 3600 * 1000).toString());

  makeAuthorizedRequest(accessToken);
};

async function handleButtonClick() {
  const accessToken = localStorage.getItem("accessToken");
  // console.log("clicked", accessToken);
  // if (!accessToken) {
  //   window.location.href = authorizationUrl;
  // }

  if (accessToken) {
    const expiresAt = localStorage.getItem("expiresAt");
    if (expiresAt && parseInt(expiresAt) > Date.now()) {
      makeAuthorizedRequest(accessToken);
      window.location.href = "http://localhost:5173/test";
    } else {
      window.location.href = authorizationUrl;
      // const code = new URL(window.location.href).searchParams.get("code");
      // await fetchAccessToken(code);
    }
  } else {
    window.location.href = authorizationUrl;
    // console.log("fetching");
    // const code = new URL(window.location.href).searchParams.get("code");
    // await fetchAccessToken(code);
  }
}

const Home: React.FC<RouteProps> = () => {
  return (
    <div>
      <span className="neon">Music app which inspires</span>
      {/* <button onClick={handleButtonClick}>Log In</button> */}
    </div>
  );
};

export default Home;

//   useEffect(() => {
//     const searchParams = new URLSearchParams(window.location.search);
//     const code = searchParams.get("code");
//     console.log(code);
//     if (code) {
//       console.log("CODE");

//       handleRedirect(code);
//     }
//   }, []);

// async function handleRedirect(code: string) {
//     const response = await axios.post(
//       "https://accounts.spotify.com/api/token",
//       {
//         grant_type: "authorization_code",

//         redirect_uri: redirectUri,
//       },
//       {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
//         },
//       }
//     );
//     const accessToken = response.data.access_token;
//     localStorage.setItem("accessToken", accessToken);
//     localStorage.setItem("expiresAt", (Date.now() + 3600 * 1000).toString());

//     const accessResponse = await axios.get("https://api.spotify.com/v1/me", {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//   }
