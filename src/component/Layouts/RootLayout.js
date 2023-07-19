import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const paths = [
    {
      page: "Home",
      route: "/",
    },
    {
      page: "About",
      route: "/about",
    },
    {
      page: "Contact",
      route: "/contact",
    },

    {
      page: "Filtered_Category",
      route: "/categories/details/23-Jun-2022/sports",
    },

    {
      page: "Photos",
      route: "/gallery",
    },
    {
      page: "Dashboard",
      route: "/dashboard",
    },
  ];

  return (
    <Layout className="layout">
      <Header>
        <div className="demo-logo" />
        <Menu
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          <items>
            {paths.map((path, index) => (
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "0px 10px",
                }}
                key={index + 1}
                href={path.route}
              >
                {path.page}
              </Link>
            ))}
          </items>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            height: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default RootLayout;
