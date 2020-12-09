import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

// export const WithAuthRedirect = (Component) => {
//   class WithAuthRedirect extends React.Component {
//     render() {
//       if (!this.props.isAuth) {
//         return <Redirect to={"/login"} />;
//       }
//       return <Component {...this.props} />;
//     }
//   }
//   let ConnectedWithAuthRedirect = connect(mapStateToProps)(WithAuthRedirect);
//   return ConnectedWithAuthRedirect;
// };
export const WithAuthRedirect = (Component) => {
  let withRedirectAuth = (props) => {
    if (!props.isAuth) return <Redirect to={"/login"} />;
    return <Component {...props} />;
  };

  let ConnectedWithAuthRedirect = connect(mapStateToProps)(withRedirectAuth);
  return ConnectedWithAuthRedirect;
};
