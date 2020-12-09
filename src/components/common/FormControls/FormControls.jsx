import React from "react";
import styles from "./FormControls.module.css";
import { Field } from "redux-form";

export const TextArea = ({ input, meta: { touched, error }, ...props }) => {
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

export const Input = ({ input, meta: { touched, error }, ...props }) => {
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

export const createField = (
  component,
  validators,
  name,
  placeholder,
  props = {},
  text = ""
) => (
  <div>
    <Field
      component={component}
      validate={validators}
      name={name}
      placeholder={placeholder}
      {...props}
    />
    {text}
  </div>
);
