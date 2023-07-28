import Anime from "../pages/Anime/Anime";
import LoginPage from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserPanel from "../pages/UserPanel/UserPanel";

export type Permission = "authorized" | "unauthorized";

export type Route = {
  path: string;
  element: React.ReactNode;
  permissions: Permission[];
};

const routes: Route[] = [
  {
    path: "/anime",
    element: <div>23</div>,
    permissions: ["unauthorized", "authorized"],
  },
  {
    path: "/anime/:id",
    element: <Anime />,
    permissions: ["unauthorized", "authorized"],
  },
  {
    path: "/login",
    element: <LoginPage />,
    permissions: ["unauthorized"],
  },
  {
    path: "/register",
    element: <Register />,
    permissions: ["unauthorized"],
  },
  {
    path: "/userpanel",
    element: <UserPanel />,
    permissions: ["authorized"],
  },
];

export default routes;
