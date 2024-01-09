import { Layout } from "antd";
import Header from "@components/common/MainTemplate/Header.tsx";
import Footer from "@components/common/MainTemplate/Footer.tsx";
import { ReactNodeProps } from "@typings/ReactNodeProps.ts";

const MainTemplate = ({ children }: ReactNodeProps) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />

      <Layout.Content style={{ padding: "48px 48px" }}>
        {children}
      </Layout.Content>

      <Footer />
    </Layout>
  );
};

export default MainTemplate;
