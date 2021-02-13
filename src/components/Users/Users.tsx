import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import { UsersType } from "../../redux/usersReducer";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  onPageChange: (packageNumber: number) => void;
  currentPage: number;
  users: Array<UsersType>;
  followingInProgress: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

const Users: React.FC<PropsType> = ({
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
