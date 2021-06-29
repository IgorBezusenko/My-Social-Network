import React, {useEffect} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import {FilterType, getUsers} from "../../redux/usersReducer";
import {UsersSearchForm} from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUserSelector,
  getUsersFilter
} from "../../redux/userSelectors";


export const Users: React.FC = () => {
  const users = useSelector(getUserSelector);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getUsersFilter);
  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize, filter));
  }, []);

  const onPageChange = (pageNumber: number) => {
    dispatch(getUsers(pageNumber, pageSize, filter));
  };
  const onFilterChanged = (filter: FilterType) => {
    dispatch(getUsers(1, pageSize, filter));
  };
  const follow = (userId: number) => {
    dispatch(follow(userId))
  };
  const unfollow = (userId: number) => {
    dispatch(unfollow(userId))
  };

  return (
      <div>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>
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
                  followingInProgress={followingInProgress}
                  follow={follow}
                  unfollow={unfollow}
              />
          );
        })}
      </div>
  );
};

