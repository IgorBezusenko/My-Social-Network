import React from "react";
import s from "./Users.module.css";
import userIcon from "../../assets/image/user.png";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            onClick={() => props.onPageChange(p)}
            className={props.currentPage === p && s.selectedPage}
          >
            {p}
          </span>
        ))}
      </div>

      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <div>
              <div className={s.userPhoto}>
                <img
                  src={user.photos.small != null ? user.photos.small : userIcon}
                />
              </div>
              <div>
                {user.followed ? (
                  <button onClick={() => props.unfollow(user.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => props.follow(user.id)}>Follow</button>
                )}
              </div>
            </div>
            <div>
              <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </div>
              <div>
                <div>{"user.location.country"}</div>
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
