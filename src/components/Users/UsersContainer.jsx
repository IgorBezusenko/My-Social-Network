import React from "react";
import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPage,
  unfollow,
} from "../../redux/usersReducer";
import Users from "./Users";
import { Spinner } from "../common/spinner/spinner";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Spinner /> : null}
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

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
};

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(UsersAPI);
