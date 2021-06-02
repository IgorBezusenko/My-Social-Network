import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import {dialogActions} from "../../redux/dialogsReducer";
import {AppStateType} from "../../redux/reduxStore";
import React from "react";

const mapStateToProps = (state:AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};


export default compose<React.ComponentType>(
  connect(mapStateToProps, {...dialogActions}),
    WithAuthRedirect
)(Dialogs);
