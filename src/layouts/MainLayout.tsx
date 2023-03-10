import React, { ReactNode } from "react";
import { useMeState } from "../components/states";

import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";

type LayoutProps = {
  children: ReactNode;
};

const MainLayout = (props: LayoutProps) => {
  const { children } = props;
  const { general } = useMeState((state) => ({
    general: state.general,
  }));

  const notIndex = useLocation().pathname.length > 1;

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

      <div className="layout__main">
        {notIndex && <SideBar />}
        <div className="layout__content">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
