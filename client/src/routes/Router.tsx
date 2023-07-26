import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from "src/App";
import { useAppSelector } from "src/store/hooks";
import routes, { Permission } from "./routes";
import { HomePage } from "src/pages/HomePage";

const Router = () => {
  const auth = useAppSelector((state) => state.auth);

  const shouldRedirect = (permissions: Permission[]) => {
    if (auth.token && !permissions.includes("authorized")) {
      throw redirect("/");
    }
    return null;
  };

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>
            <Route path="/" element={<HomePage />} />
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
                // loader={() => shouldRedirect(route.permissions)}
              />
            ))}
          </Route>
        )
      )}
    />
  );
};

export default Router;
