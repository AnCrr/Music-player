import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__header">
        {/* <div className="layout__header__content"> */}
        <img className="layout__header__logo" src="src/assets/kitty.svg" />
        <h2 className="layout__header__title">MUSE</h2>
        {/* </div> */}
      </div>
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default MainLayout;
