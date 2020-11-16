import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 12479;
    }
    this.props.getUserProfile(userId);
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
const mapDispatchToProps = { getUserProfile };

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

let WithUrlDataContainer = withRouter(AuthRedirectComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainer);
