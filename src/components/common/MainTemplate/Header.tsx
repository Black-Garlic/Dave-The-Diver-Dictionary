import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { MENU } from "@constants/Menu.ts";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(({ key }: { key: string }) => {
    navigate("/" + key);
  }, []);

  return (
    <Layout.Header style={{ display: "flex", alignItems: "center" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["fish"]}
        items={MENU}
        style={{ flex: 1, minWidth: 0 }}
        onClick={handleClick}
      />
    </Layout.Header>
  );
};

export default Header;
