import React from "react";
import LoginReduxForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { login })(Login);
