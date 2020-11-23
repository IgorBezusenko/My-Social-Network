import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { AddMessageReduxForm } from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
  let dialogsElement = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.dialogsPage.messages.map((message) => (
    <Message key={message.id} message={message.message} id={message.id} />
  ));

  const addNewMessage = (value) => {
    props.sendMessage(value.addMessage);
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
