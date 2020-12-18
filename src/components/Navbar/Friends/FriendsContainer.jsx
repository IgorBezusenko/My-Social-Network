import { connect } from "react-redux";
import Friends from "./Friends";

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};

const FriendsContainer = connect(mapStateToProps, null)(Friends);

export default FriendsContainer;
