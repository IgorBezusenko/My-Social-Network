import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import {minLength, required} from "../utils/validators/validators";
import styles from "../common/FormControls/FormControls.module.css";
import {LoginFormValuesType, LoginFormValuesTypeKeys} from "./login";

const minLength4 = minLength(4);

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit, error, captchaUrl}) => {
        return (
            <form onSubmit={handleSubmit}>
                {error && <div className={styles.formSomeError}>{error}</div>}
                {createField<LoginFormValuesTypeKeys>(Input, [required, minLength4], "email", "Email", {
                    type: "text",
                })}
                {createField<LoginFormValuesTypeKeys>(Input, [required, minLength4], "password", "Password", {
                    type: "password",
                })}
                {createField<LoginFormValuesTypeKeys>(
                    Input,
                    null, "rememberMe",
                    undefined,
                    {type: "checkbox"},
                    "rememberMe"
                )}

                {captchaUrl && <img src={captchaUrl} alt="cover"/>}
                {captchaUrl &&
                createField<LoginFormValuesTypeKeys>(Input, [required], "captcha", "Captcha...", {})}

                <div>
                    <button>Log in</button>
                </div>
            </form>
        );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: "login",
})(LoginForm);


export default LoginReduxForm;
