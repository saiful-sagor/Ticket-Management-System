import {
    LineChartOutlined,
    AlignCenterOutlined,
    ProfileOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    LaptopOutlined,
    FileOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React from "react";
import "./Sidebar.css";
import Logo from "./Logo1.png";
const { Header, Content, Footer, Sider } = Layout;
const Sidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        {/* <div className="logo" >
          <img src="Logo" />
        </div> */}
        <div className="logo" />
        {/* <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
        /> */}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['6']}>
        <Menu.Item
          key="1"
          icon={<LineChartOutlined />}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<AlignCenterOutlined />}
        >
          My Tickets
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<ProfileOutlined />}
        >
         My Profile
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<UserOutlined />}
        >
         Users
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<LaptopOutlined />}
        >
          Assets
        </Menu.Item>

        <Menu.Item
          key="6"
          icon={<MenuUnfoldOutlined />}
        >
          Ticket Type
        </Menu.Item>

        <Menu.Item
          key="7"
          icon={<FileOutlined />}
        >
          Tickets Queue
        </Menu.Item>
        </Menu>
        
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 1000,
              background: colorBgContainer,
            }}
          ></div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
