import React from "react";
import { connect } from "react-redux";
import {
  follow,
  getUsers,
  unfollow,
  UsersType,
} from "../../redux/usersReducer";
import Users from "./Users";
import { Spinner } from "../common/spinner/spinner";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUserSelector,
} from "../../redux/userSelectors";
import { AppStateType } from "../../redux/reduxStore";

type MapStatePropsType = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalUsersCount: number;
  users: Array<UsersType>;
  followingInProgress: Array<number>;
};

type MapDispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
};

type OwnPropsType = {
  pageTitle: string;
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersAPI extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Spinner /> : null}
        <h2>{this.props.pageTitle}</h2>
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChange={this.onPageChange}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    users: getUserSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

// const mapDispatchToProps = {
//   follow,
//   unfollow,
//   getUsers,
// };

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      getUsers,
    }
  )
)(UsersAPI);
