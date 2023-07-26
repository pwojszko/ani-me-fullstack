import React from "react";
import ReactDOM from "react-dom/client";

//redux
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./assets/scss/main.scss";
import Router from "./routes/Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
