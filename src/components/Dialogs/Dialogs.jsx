import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElement = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.dialogsPage.messages.map((message) => (
    <Message key={message.id} message={message.message} id={message.id} />
  ));

  let newMessageText = props.dialogsPage.newMessageText;

  const onSendMessageCklick = () => {
    props.sendMessage();
  };
  const onNewMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>

      <div className={s.messages}>{messagesElement}</div>
      <div>
        <div>
          <textarea
            value={newMessageText}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageCklick}>Send</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
