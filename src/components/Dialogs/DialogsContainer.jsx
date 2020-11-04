import React from "react";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogsReduser";

import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageCklick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (text) => {
    let action = updateNewMessageTextCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      sendMessage={onSendMessageCklick}
      updateNewMessageText={onNewMessageChange}
      state={state}
    />
  );
};
export default DialogsContainer;
