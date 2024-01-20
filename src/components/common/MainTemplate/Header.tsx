import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { MENU } from "@constants/Menu.ts";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState<string>("");

  useEffect(() => {
    if (location.pathname) {
      const menu = MENU.find((menu) => menu.path.includes(location.pathname));

      if (menu) {
        setSelectedMenu(menu.key);
      }
    }
  }, [location.pathname]);

  const handleClick = useCallback(
    ({ key }: { key: string }) => {
      navigate("/" + key);
    },
    [navigate],
  );

  return (
    <Layout.Header style={{ display: "flex", alignItems: "center" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[selectedMenu]}
        items={MENU}
        style={{ flex: 1, minWidth: 0 }}
        onClick={handleClick}
      />
    </Layout.Header>
  );
};

export default Header;
