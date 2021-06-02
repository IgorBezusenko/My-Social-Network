import React from "react";
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/reduxStore";

type MapStatePropsType = {
  captchaUrl: string | null,
  isAuth: boolean
}
type MapDispatchPropsType = {
  login: (email: string,
          password: string,
          rememberMe: boolean,
          captcha: string) => void
}

export type LoginFormValuesType = {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
}
export type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>


const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: any) => {
    props.login(
        formData.email,
        formData.password,
        formData.rememberMe,
        formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"profile"}/>;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state:AppStateType): MapStatePropsType => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
