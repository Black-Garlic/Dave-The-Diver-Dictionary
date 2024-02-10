import { useEffect, useState } from "react";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { useLocation } from "react-router";
import { ROUTE_LIST } from "@constants/Route.ts";

const useBreadcrumb = () => {
  const location = useLocation();

  const [breadcrumbItemList, setBreadcrumbItemList] = useState<ItemType[]>();

  useEffect(() => {
    const pathSplitList = location.pathname.split("/");

    const pathList: string[] = [];

    for (let i = 0; i < pathSplitList.length; i++) {
      let path = "";

      pathSplitList.forEach((pathSplit, index) => {
        if (index > 0 && index <= i) {
          path += "/" + pathSplit;
        }
      });

      pathList.push(path);
    }

    const routeList = ROUTE_LIST.filter((route) =>
      pathList.some((path) => route.path === path),
    );

    const breadcrumbList: ItemType[] = routeList.map((route) => ({
      title: route.name,
    }));

    setBreadcrumbItemList(breadcrumbList);
  }, [location]);

  return breadcrumbItemList;
};

export default useBreadcrumb;
