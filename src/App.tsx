import React from "react";
import {BrowserRouter, Redirect, Route, Switch, withRouter,} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import  {UsersPage} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/appReducer";
import {Spinner} from "./components/common/spinner/spinner";
import {AppStateType, store} from "./redux/reduxStore";
import {withSuspense} from "./components/hoc/withSuspense";

const ProfileContainer = React.lazy(() =>
    import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
    import("./components/Dialogs/DialogsContainer")
);
const Login = React.lazy(() => import("./components/Login/login"));

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
  initializedApp: () => void
}

const SuspenseDialog = withSuspense(DialogsContainer)
const SuspenseProfile = withSuspense(ProfileContainer)

class App extends React.Component<MapStatePropsType & MapDispatchPropsType> {
  componentDidMount() {
    this.props.initializedApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Spinner/>;
    }
    return (
        <div className="app-wrapper">
          <HeaderContainer/>
          <Navbar/>
          <div className="app-wrapper-content">
            <Switch>
              <Route
                  exact
                  path={"/"}
                  render={() => <Redirect to={"/profile"}/>}
              />
              <Route
                  path={"/profile/:userId?"}
                  render={() => <SuspenseProfile/> }
              />
              <Route path={"/dialog"} render={() => <SuspenseDialog/>}/>
              <Route
                  path={"/users"}
                  render={() => <UsersPage pageTitle={"Samurai"}/>}
              />
              <Route path={"/login"} render={() => withSuspense(Login)}/>
              <Route path={"/*"} render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    initialized: state.app.initialized,
  };
};

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedApp})
)(App);

const SocialNetworkApp: React.FC = () => {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </BrowserRouter>
  );
};

export default SocialNetworkApp;
