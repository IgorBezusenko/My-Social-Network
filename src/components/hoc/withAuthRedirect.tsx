import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

type MapPropsType = {
  isAuth: boolean
}
type DispatchPropsType = {
  fake: ()=>void
}

export function WithAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

  const RedirectComponent:React.FC< MapPropsType> = (props) => {
    const {isAuth, ...restProps} = props

    if (!isAuth) {
      return <Redirect to={"/login"}/>;
    }
    return <WrappedComponent {...restProps  as WCP} />;
  };

  let ConnectedWithAuthRedirect = connect<MapPropsType,DispatchPropsType,WCP,AppStateType>(
      mapStateToProps)(RedirectComponent);
  return ConnectedWithAuthRedirect;
};


// export const WithAuthRedirect = (Component) => {
//   let withRedirectAuth = (props) => {
//     if (!props.isAuth) return <Redirect to={"/login"} />;
//     return <Component {...props} />;
//   };
//
//   let ConnectedWithAuthRedirect = connect(mapStateToProps)(withRedirectAuth);
//   return ConnectedWithAuthRedirect;
// };

