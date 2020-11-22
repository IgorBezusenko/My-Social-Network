import React from "react";
import s from "./Users.module.css";
import userIcon from "../../assets/image/user.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p, index) => (
          <span
            key={index}
            onClick={(e) => props.onPageChange(p)}
            className={props.currentPage === p ? s.selectedPage : ""}
          >
            {p}
          </span>
        ))}
      </div>

      {props.users.map((user, index) => {
        return (
          <div key={index}>
            <div>
              <div className={s.userPhoto}>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    src={
                      user.photos.small != null ? user.photos.small : userIcon
                    }
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div>
              <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </div>
              <div>
                <div>
                  {"user.location.country"}
                  {user.id}
                </div>
                <div>{"user.location.city"}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Users;
