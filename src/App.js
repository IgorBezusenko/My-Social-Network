import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path={"/profile"} render={() => <Profile />} />
          <Route path={"/dialog"} render={() => <DialogsContainer />} />
          <Route path={"/users"} render={() => <Users />} />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
