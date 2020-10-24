import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.state.messages.map((message) => (
    <Message key={message.id} message={message.message} id={message.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>

      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};
export default Dialogs;
