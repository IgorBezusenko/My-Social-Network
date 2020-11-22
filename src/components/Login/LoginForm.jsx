import React from "react";

import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={"input"}
          name={"login"}
          type="text"
          placeholder={"Login"}
        />
      </div>
      <div>
        <Field
          component={"input"}
          name={"password"}
          type="text"
          placeholder={"Password"}
        />
      </div>
      <div>
        <Field
          component={"input"}
          name={"rememberMe"}
          id="rememberMe"
          type="checkbox"
        />
        <label htmlFor="rememberMe">remember me</label>
      </div>
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
