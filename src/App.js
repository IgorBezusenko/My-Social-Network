import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route
            path={"/profile"}
            render={() => <Profile store={props.store} />}
          />
          <Route
            path={"/dialog"}
            render={() => <DialogsContainer store={props.store} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
