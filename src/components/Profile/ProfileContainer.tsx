import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus,} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";

class ProfileContainer extends React.Component<PropsType> {
  updateProfile() {
    let userId: number | null = +this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId as number);
    this.props.getStatus(userId as number);
  }

  componentDidMount() {
    this.updateProfile();
  }

  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.updateProfile();
    }
  }

  render() {
    return (
        <div>
          <Profile
              {...this.props}
              isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
  };
};

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {
      getUserProfile,
      getStatus,
      updateStatus,
      savePhoto,
      saveProfile,
    }),
    withRouter
)(ProfileContainer);

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  getUserProfile: (userId: number) => void,
  getStatus: (userId: number) => void,
  updateStatus: (status: string) => void,
  savePhoto: (file: File) => void,
  saveProfile: (profile: ProfileType) => Promise<any>,
}
type PathParamsType = {
  userId: string,
}
type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;
