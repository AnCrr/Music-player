import React from "react";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { useMeState } from "../components/states";

const { Header, Content, Sider } = Layout;
// const items1: MenuProps["items"] = ["1", "2"].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

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

const Authorized: React.FC = () => {
  const { general } = useMeState((state) => ({
    general: state.general,
  }));
  console.log("general", general);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <div
        style={{
          background: "rgb(30, 28, 32)",
          display: "flex",
          padding: "10px 20px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="header"
      >
        {/* <div className="logo" /> */}
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
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          ></Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Authorized;
