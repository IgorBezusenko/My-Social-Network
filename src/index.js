import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import state, { addPost, subscribe, updateNewPostText } from "./redux/state";

let rerender = (state) => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />,
    document.getElementById("root")
  );
};
rerender(state);

subscribe(rerender);
