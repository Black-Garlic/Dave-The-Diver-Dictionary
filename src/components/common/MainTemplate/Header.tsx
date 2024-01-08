import { Layout, Menu } from "antd";

const Header = () => {
  const menu = [
    { key: "fish", label: "해산물" },
    { key: "sub", label: "부재료" },
    { key: "seasoning", label: "조미료" },
    { key: "dish", label: "요리" },
  ];

  return (
    <Layout.Header style={{ display: "flex", alignItems: "center" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={menu}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Layout.Header>
  );
};

export default Header;
