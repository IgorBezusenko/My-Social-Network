import { connect } from "react-redux";
import { sendMessageCreator } from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) => {
      dispatch(sendMessageCreator(newMessageText));
    },
  };
};

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
