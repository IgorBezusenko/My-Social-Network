import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path={"/profile/:userId"}
            render={() => <ProfileContainer />}
          />
          <Route path={"/dialog"} render={() => <DialogsContainer />} />
          <Route path={"/users"} render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
