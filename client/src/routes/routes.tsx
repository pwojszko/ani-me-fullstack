import App from "../App";
import { HomePage } from "../pages/HomePage";
import { AnimePage } from "../pages/AnimePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
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
        element: <AnimePage />,
      },
      // {
      //   path: "/login",
      //   element: <LoginPage />,
      // },
      // {
      //   path: "/register",
      //   element: <RegisterPage />,
      // },
      // {
      //   path: "/userpanel",
      //   element: <UserPanelPage />,
      // },
    ],
  },
];

export default routes;
