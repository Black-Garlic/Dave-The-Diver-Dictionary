import { Breadcrumb, Layout } from "antd";
import Header from "@components/common/MainTemplate/Header.tsx";
import Footer from "@components/common/MainTemplate/Footer.tsx";

const MainTemplate = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />

      <Layout.Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: "#000",
            minHeight: 280,
            padding: 24,
            borderRadius: "8px",
          }}
        >
          Content
        </div>
      </Layout.Content>

      <Footer />
    </Layout>
  );
};

export default MainTemplate;
