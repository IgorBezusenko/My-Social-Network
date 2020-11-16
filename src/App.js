import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import  Login  from "./components/Login/login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path={"/profile/:userId?"}
            render={() => <ProfileContainer />}
          />
          <Route path={"/dialog"} render={() => <DialogsContainer />} />
          <Route path={"/users"} render={() => <UsersContainer />} />
          <Route path={"/login"} render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
