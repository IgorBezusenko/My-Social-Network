import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { fetchUserId, setUsersProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 12479;
    }
    this.props.fetchUserId(userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};
const mapDispatchToProps = { setUsersProfile, fetchUserId };

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainer);
