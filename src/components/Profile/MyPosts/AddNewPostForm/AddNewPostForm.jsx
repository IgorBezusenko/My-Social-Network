import { Field, reduxForm } from "redux-form";
import React from "react";
import { maxLength, required } from "../../../utils/validators/validators";
import { TextArea } from "../../../common/FormControls/FormControls";

const maxLength50 = maxLength(50);

const AddNewPostForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={TextArea}
            validate={[required, maxLength50]}
            placeholder="Enter your post"
            name={"newPostText"}
          />
        </div>
        <button>Add post</button>
      </form>
    </div>
  );
};

export const AddNewPostReduxForm = reduxForm({
  form: "profileAddPost",
})(AddNewPostForm);
