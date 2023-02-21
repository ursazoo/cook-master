import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";

import { ConfigProvider } from "antd";

import routes from "./router";
import store from "./store";

import "./index.less";

const RouteElement = () => useRoutes(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <ConfigProvider csp={{ nonce: "YourNonceCode" }}> */}
        <RouteElement />
        {/* </ConfigProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
