import {InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLength, required} from "../../../utils/validators/validators";
import {createField, GetStringKeys, TextArea} from "../../../common/FormControls/FormControls";

const maxLength50 = maxLength(50);
type PropsType = {}

export type AddPostValueType = {
  newPostText: string
}
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostValueType>

const AddNewPostForm: React.FC<InjectedFormProps<AddPostValueType, PropsType> & PropsType> = (props) => {
  return (
      <div>
        <form onSubmit={props.handleSubmit}>
          <div>
            {createField<AddPostFormValuesTypeKeys>(TextArea, [required, maxLength50], "newPostText", "Enter your post", {
              type: "text",
            })}
          </div>
          <button>Add post</button>
        </form>
      </div>
  );
};

export const AddNewPostReduxForm = reduxForm<AddPostValueType, PropsType>({
  form: "profileAddPost",
})(AddNewPostForm);
