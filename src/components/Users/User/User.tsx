import React from "react";
import s from "../Users.module.css";
import userIcon from "../../../assets/image/user.png";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../redux/usersReducer";

type PropsType = {
  user: UsersType
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({
                                     user,
                                     followingInProgress,
                                     follow,
                                     unfollow
                                   }) => {
  return (
      <div>
        <div>
          <div className={s.userPhoto}>
            <NavLink to={"/profile/" + user.id}>
              <img
                  src={user.photos.small != null ? user.photos.small : userIcon}
              />
            </NavLink>
          </div>
          <div>
            {user.followed ? (
                <button
                    disabled={followingInProgress.some((id) => id === user.id)}
                    onClick={() => {
                      unfollow(user.id);
                    }}
                >
                  Unfollow
                </button>
            ) : (
                <button
                    disabled={followingInProgress.some((id) => id === user.id)}
                    onClick={() => {
                      follow(user.id);
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
};
export default User;
