import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home";
import TaskPage from "../pages/tasks";
import MainPage from "../pages/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/tasks",
        element: <TaskPage />
      }
    ]
  }
]);

export default router;