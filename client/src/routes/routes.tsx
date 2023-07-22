import App from "../App";
import { HomePage } from "../pages/HomePage";
import Anime from "../pages/Anime/Anime";
import LoginPage from "../pages/LoginPage/Login";
import Register from "../pages/Register/Register";
import UserPanelPage from "../pages/UserPanelPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/anime/:id",
        element: <Anime />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // {
      //   path: "/userpanel",
      //   element: <UserPanelPage />,
      // },
    ],
  },
];

export default routes;
