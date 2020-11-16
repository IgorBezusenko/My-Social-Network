import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogsReduser";

import Dialogs from "./Dialogs";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";

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

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
