import React from "react";
import { useMeState } from "../components/states";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";

const { Header, Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  UserOutlined,
  //   LaptopOutlined,
  //   NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(1).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const MainLayout = ({ children }) => {
  const { general } = useMeState((state) => ({
    general: state.general,
  }));
  const isHome = useLocation().pathname.includes("home");

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
    // <Layout>
    //   <Header
    //     style={{
    //       background: "rgb(30, 28, 32)",
    //       display: "flex",
    //       justifyContent: "space-between",
    //     }}
    //     className="header"
    //   >
    //     {/* <div className="logo" /> */}
    //     <div className="header__logo">
    //       <img src="src/assets/kitty.svg" />
    //       <h2>MUSE</h2>
    //     </div>
    //     {general && (
    //       <div className="header__profile">
    //         <div className="header__profile__greeting">
    //           Welcome, {general.name}
    //         </div>
    //         <div className="header__profile__photo">
    //           <img src={general.image} />
    //         </div>
    //       </div>
    //     )}
    //   </Header>
    //   {isHome ? (
    //     <Layout style={{ background: "rgb(79, 70, 87)" }}>
    //       <Sider width={200} style={{ background: "rgb(79, 70, 87)" }}>
    //         <Menu
    //           mode="inline"
    //           defaultSelectedKeys={["1"]}
    //           defaultOpenKeys={["sub1"]}
    //           style={{
    //             height: "100%",
    //             borderRight: 0,
    //             background: "rgb(30, 28, 32) ",
    //           }}
    //           items={items2}
    //         />
    //       </Sider>
    //       {/* <Layout style={{ padding: "0 24px 24px" }}> */}
    //       <Content
    //         style={{
    //           // padding: 24,
    //           margin: 0,
    //           minHeight: 280,
    //           backgroundColor: "rgb(30, 28, 32)",
    //         }}
    //       >
    //         {children}
    //       </Content>
    //       {/* </Layout> */}
    //     </Layout>
    //   ) : (
    //     <Layout>
    //       <div className="content">{children}</div>
    //     </Layout>
    //   )}
    //   {/* <Layout>
    //     <div className="content">{children}</div>
    //   </Layout> */}
    // </Layout>
  );
};

export default MainLayout;
