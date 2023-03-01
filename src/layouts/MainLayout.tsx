import React from "react";
import { useMeState } from "../components/states";

const MainLayout = ({ children }) => {
  const { general } = useMeState((state) => ({
    general: state.general,
  }));
  console.log("general", general);

  return (
    <div className="layout">
      <div className="header">
        <div className="header__logo">
          <img src="src/assets/kitty.svg" />
          <h2>MUSE</h2>
        </div>
        {general && (
          <div className="header__profile">
            <div className="header__profile__greeting">
              Welcome, {general.name}
            </div>
            <div className="header__profile__photo">
              <img src={general.image} />
            </div>
          </div>
        )}
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default MainLayout;
