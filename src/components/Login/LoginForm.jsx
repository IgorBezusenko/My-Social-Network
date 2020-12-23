import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input } from "../common/FormControls/FormControls";
import { minLength, required } from "../utils/validators/validators";
import styles from "../common/FormControls/FormControls.module.css";

const minLength4 = minLength(4);

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && <div className={styles.formSomeError}>{error}</div>}
      {createField(Input, [required, minLength4], "email", "Email", {
        type: "text",
      })}
      {createField(Input, [required, minLength4], "password", "Password", {
        type: "password",
      })}
      {createField(
        Input,
        null,
        "rememberMe",
        null,
        { type: "checkbox" },
        "rememberMe"
      )}

      {captchaUrl && <img src={captchaUrl} alt="cover" />}
      {captchaUrl &&
        createField(Input, [required], "captcha", "Captcha...", {})}

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
