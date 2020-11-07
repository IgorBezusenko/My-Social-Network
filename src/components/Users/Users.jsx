import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  return props.users.map((user) => {
    return (
      <div key={user.id}>
        <div>
          <div className={s.userPfoto}>
            <img src={user.photoUrl} />
          </div>
          <div>
            {user.followed ? (
              <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
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
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </div>
        </div>
      </div>
    );
  });
};

export default Users;
