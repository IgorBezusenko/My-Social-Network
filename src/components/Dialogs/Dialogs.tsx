import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {AddMessageReduxForm} from "./AddMessageForm/AddMessageForm";
import {InitialSateType} from "../../redux/dialogsReducer";

type OwnPropsType = {
    dialogsPage: InitialSateType,
    sendMessage: (messageText: string) => void
}

export type NewMessageFormValueType = {
    addMessage: string
}

const Dialogs: React.FC<OwnPropsType> = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map((dialog) => (
        <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
    ));

    let messagesElement = props.dialogsPage.messages.map((message) => (
        <Message key={message.id} message={message.message} />
    ));

    const addNewMessage = (value: NewMessageFormValueType) => {
        props.sendMessage(value.addMessage);
        value.addMessage = "";
    };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
      <AddMessageReduxForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
