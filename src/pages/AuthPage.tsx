import React from "react";
import { RouteProps } from "react-router-dom";
import axios from "axios";

const clientId = "a31872714b454efda5867bca835d3846";
const clientSecret = "a71669917cf648c3b3e95919ffd3ba3a";
const redirectUri = "http://localhost:5173/home";
const scopes = ["user-read-private", "user-read-email"];

const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;

const makeAuthorizedRequest = async (accessToken: string) => {
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

export const fetchAccessToken = async (code: string | null) => {
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

  if (accessToken) {
    const expiresAt = localStorage.getItem("expiresAt");
    if (expiresAt && parseInt(expiresAt) > Date.now()) {
      makeAuthorizedRequest(accessToken);
      window.location.href = "http://localhost:5173/home";
    } else {
      window.location.href = authorizationUrl;
    }
  } else {
    window.location.href = authorizationUrl;
  }
}

const AuthPage: React.FC<RouteProps> = () => {
  return (
    <div className="login">
      <div className="login__block">
        <span className="login__title login__title-neon">
          Music app which inspires
        </span>
        <button className="login__btn" onClick={handleButtonClick}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
