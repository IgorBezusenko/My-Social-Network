import React from "react";
import Friend from "./Friend/Friend";
import s from "./Friends.module.css";

const Friends = (props) => {
  const friendItem = props.sidebar.friends.map((friend) => (
    <Friend key={friend.id} name={friend.name} />
  ));
  return friendItem;
};

export default Friends;
