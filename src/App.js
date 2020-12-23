import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
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
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => <Redirect to={"/profile"} />}
            />
            <Route
              path={"/profile/:userId?"}
              render={withSuspense(ProfileContainer)}
            />
            <Route path={"/dialog"} render={withSuspense(DialogsContainer)} />
            <Route path={"/users"} render={() => <UsersContainer />} />
            <Route path={"/login"} render={withSuspense(Login)} />
            <Route path={"/*"} render={() => <div>404 NOT FOUND</div>} />
          </Switch>
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SocialNetworkApp;
