import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "@store/router.tsx";

function App() {
  return (
    <MainTemplate>
      <RouterProvider router={router} />
    </MainTemplate>
  );
}

export default App;
