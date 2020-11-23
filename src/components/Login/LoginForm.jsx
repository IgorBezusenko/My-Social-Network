import React from "react";

import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormControls";
import { minLength, required } from "../utils/validators/validators";

const minLength4 = minLength(4);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          validate={[required, minLength4]}
          name={"login"}
          type="text"
          placeholder={"Login"}
        />
      </div>
      <div>
        <Field
          component={Input}
          validate={[required, minLength4]}
          name={"password"}
          type="text"
          placeholder={"Password"}
        />
      </div>
      <div>
        <Field
          component={Input}
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
