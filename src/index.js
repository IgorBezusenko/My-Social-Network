import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "./redux/state";

let rerender = (state) => {
  ReactDOM.render(
    <App
      state={store.getState()}
      addPost={store.addPost.bind(store)}
      updateNewPostText={store.updateNewPostText.bind(store)}
    />,
    document.getElementById("root")
  );
};
rerender(store.getState());

store.subscribe(rerender);
