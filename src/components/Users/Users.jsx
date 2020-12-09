import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChange,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />

      {users.map((user) => {
        return (
          <User
            user={user}
            key={user.id}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        );
      })}
    </div>
  );
};
export default Users;
