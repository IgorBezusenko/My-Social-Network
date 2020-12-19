import React, { Suspense } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializedApp } from "./redux/appReducer";
import { Spinner } from "./components/common/spinner/spinner";
import { store } from "./redux/reduxStore";
import { withSuspense } from "./components/hoc/withSuspense";

// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import Login from "./components/Login/login";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const Login = React.lazy(() => import("./components/Login/login"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Spinner />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path={"/profile/:userId?"}
            render={withSuspense(ProfileContainer)}
          />
          <Route path={"/dialog"} render={withSuspense(DialogsContainer)} />
          <Route path={"/users"} render={() => <UsersContainer />} />
          <Route path={"/login"} render={withSuspense(Login)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializedApp })
)(App);

const SocialNetworkApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SocialNetworkApp;
