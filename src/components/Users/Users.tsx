import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import {FilterType, UsersType} from "../../redux/usersReducer";
import {UsersSearchForm} from "./UsersSearchForm";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  onPageChange: (packageNumber: number) => void;
  onFilterChanged: (filter:FilterType) => void;
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
      <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
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
