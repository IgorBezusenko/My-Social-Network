import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators/validators";
import {createField, TextArea} from "../../common/FormControls/FormControls";
import {NewMessageFormValueType} from "../Dialogs";

const maxLength50 = maxLength(50);

export type NewMessageFormValuesTypeKeys = Extract<keyof NewMessageFormValueType, string>
type OwnPropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValueType, OwnPropsType> & OwnPropsType> = (props) => {
  return (
      <div>
        <form onSubmit={props.handleSubmit}>
          <div>
            {createField<NewMessageFormValuesTypeKeys>(TextArea, [required, maxLength50], "addMessage", "Enter your message", {
              type: "text",
            })}
          </div>
          <div>
            <button>Send</button>
          </div>
        </form>
      </div>
  );
};

export const AddMessageReduxForm = reduxForm<NewMessageFormValueType, OwnPropsType>({
  form: "dialogAddMessage",
})(AddMessageForm);