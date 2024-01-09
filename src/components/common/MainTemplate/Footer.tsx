import { Layout } from "antd";

const Footer = () => {
  return (
    <Layout.Footer style={{ textAlign: "center" }}>
      ©{new Date().getFullYear()} Created by BlackGarlic /
      blackgarlic.yoon@gmail.com
    </Layout.Footer>
  );
};

export default Footer;
