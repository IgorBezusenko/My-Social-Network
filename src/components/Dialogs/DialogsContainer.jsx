import { connect } from "react-redux";

import Dialogs from "./Dialogs";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import {dialogActions} from "../../redux/dialogsReducer";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) => {
      dispatch(dialogActions.sendMessageCreator(newMessageText));
    },
  };
};

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
