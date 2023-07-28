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

  const shouldRedirect = (
    permissions: Permission[],
    path: string,
    requestUrl: string
  ) => {
    const url = new URL(requestUrl);

    if (!auth.token && permissions.includes("authorized")) {
      if (url.pathname === path) throw redirect("/");
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
                loader={({ request }) =>
                  shouldRedirect(route.permissions, route.path, request.url)
                }
              />
            ))}
          </Route>
        )
      )}
    />
  );
};

export default Router;
