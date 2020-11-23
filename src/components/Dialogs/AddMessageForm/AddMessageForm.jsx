import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../utils/validators/validators";
import { TextArea } from "../../common/FormControls/FormControls";

const maxLength50 = maxLength(50);

const AddMessageForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name={"addMessage"}
            validate={[required, maxLength50]}
            component={TextArea}
            placeholder="Enter your message"
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export const AddMessageReduxForm = reduxForm({
  form: "dialogAddMessage",
})(AddMessageForm);
