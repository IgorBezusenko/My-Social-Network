import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/image/user.png";

class Users extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((user) => {
          return (
            <div key={user.id}>
              <div>
                <div className={s.userPfoto}>
                  <img
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                  />
                </div>
                <div>
                  {user.followed ? (
                    <button onClick={() => this.props.unfollow(user.id)}>
                      Unfollow
                    </button>
                  ) : (
                    <button onClick={() => this.props.follow(user.id)}>
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
  }
}

export default Users;
