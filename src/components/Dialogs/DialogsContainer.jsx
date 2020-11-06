import React from "react";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogsReduser";

import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
