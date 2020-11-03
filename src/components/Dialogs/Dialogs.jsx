import React from "react";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/state";
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

  let newMessageText = props.state.newMessageText;

  let onSendMessageCklick = () => {
    props.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let text = e.target.value;
    let action = updateNewMessageTextCreator(text);
    props.dispatch(action);
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
