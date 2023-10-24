import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <HomePage />
  }
]);

export default router;