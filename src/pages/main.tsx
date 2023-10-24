import { Outlet } from "react-router-dom";

import MainLayout from "../layout/main";

const MainPage = () =>
{
  return <MainLayout>
    <Outlet />
  </MainLayout>
}

export default MainPage