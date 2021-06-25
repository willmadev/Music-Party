import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import { Router } from "./router";

const render = () => {
  ReactDom.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById("root")
  );
};

render();
