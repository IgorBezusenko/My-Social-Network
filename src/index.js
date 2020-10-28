import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "./redux/state";

let rerender = (state) => {
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};
rerender(store.getState());

store.subscribe(rerender);
