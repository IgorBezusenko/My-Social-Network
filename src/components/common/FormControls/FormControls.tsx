import React from "react";
import styles from "./FormControls.module.css";
import {Field, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../utils/validators/validators";

export const TextArea: React.FC<WrappedFieldProps> =
    ({
       input,
       meta: {touched, error},
       ...props
     }) => {
      const noValidate = touched && error;
      return (
          <div
              className={styles.formControl + " " + (noValidate ? styles.error : "")}
          >
            <div>
              <textarea {...input} {...props}></textarea>
            </div>
            <div>{noValidate && <span>{error}</span>}</div>
          </div>
      );
    };

export const Input: React.FC<WrappedFieldProps> = ({input, meta: {touched, error}, ...props}) => {
  const noValidate = touched && error;
  return (
      <div
          className={styles.formControl + " " + (noValidate ? styles.error : "")}
      >
        <div>
          <input {...input} {...props} />
        </div>
        <div>{noValidate && <span>{error}</span>}</div>
      </div>
  );
};

export function createField<FormKeysType extends string>(
    component: React.FC<WrappedFieldProps>,
    validators: Array<FieldValidatorType> | null,
    name: FormKeysType,
    placeholder: string | undefined,
    props = {},
    text = ""
) {
  return (<div>
    <Field
        component={component}
        validate={validators}
        name={name}
        placeholder={placeholder}
        {...props}
    />
    {text}
  </div>);
}
