import React from "react";
import s from "./Users.module.css";
import userIcon from "../../assets/image/user.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

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
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0//follow/${user.id}`,

                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "b8c04e43-1d5b-48ed-bbd5-829734d4889b",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(user.id);
                          }
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0//follow/${user.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "b8c04e43-1d5b-48ed-bbd5-829734d4889b",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(user.id);
                          }
                        });
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
