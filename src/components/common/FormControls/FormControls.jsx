import React from "react";
import styles from "./FormControls.module.css";

export const TextArea = ({ input, meta, ...props }) => {
  const noValidate = meta.touched && meta.error;
  return (
    <div
      className={styles.formControl + " " + (noValidate ? styles.error : "")}
    >
      <div>
        <textarea {...input} {...props}></textarea>
      </div>
      <div>{noValidate && <span>{meta.error}</span>}</div>
    </div>
  );
};
export const Input = ({ input, meta, ...props }) => {
  const noValidate = meta.touched && meta.error;
  return (
    <div
      className={styles.formControl + " " + (noValidate ? styles.error : "")}
    >
      <div>
        <input {...input} {...props} />
      </div>
      <div>{noValidate && <span>{meta.error}</span>}</div>
    </div>
  );
};
