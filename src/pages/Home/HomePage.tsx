import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FISH_LIST_ROUTE } from "@constants/Route.ts";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(FISH_LIST_ROUTE.path);
  }, [navigate]);

  return <></>;
};

export default HomePage;
