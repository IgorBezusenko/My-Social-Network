import React from "react";
import {
  createField,
  Input,
  TextArea,
} from "../../../common/FormControls/FormControls";
import { reduxForm } from "redux-form";
import styles from "../../../common/FormControls/FormControls.module.css";

const ProfileDataFrom = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>

      {error && <div className={styles.formSomeError}>{error}</div>}

      <div>
        <b>Full name: </b>
        {createField(Input, [], "fullName", "Full name")}
      </div>

      <div>
        <b>Looking for a job</b>:
        {createField(Input, [], "lookingForAJob", null, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills</b>:{" "}
        {createField(TextArea, [], "lookingForAJobDescription", "My skills")}
      </div>

      <div>
        <b>About me</b>: {createField(TextArea, [], "aboutMe", "About me")}
      </div>
      <div>
        <b>Contacts</b> :
        {Object.keys(profile.contacts).map((itemKey) => {
          return (
            <div key={itemKey}>
              <b>{itemKey}:</b>
              {createField(Input, [], "contacts." + itemKey, itemKey)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

export const ProfileDataReduxFrom = reduxForm({
  form: "edit-profile",
})(ProfileDataFrom);
