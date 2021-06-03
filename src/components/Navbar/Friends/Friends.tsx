import React from "react";
import Friend from "./Friend/Friend";
import {FriendsType} from "../../../redux/sidebarReducer";

type PropsType = {
  friends: any
}

const Friends: React.FC<PropsType> = (props) => {
  debugger
  const friendItem = props.friends.map((friend:FriendsType) => (

      <Friend key={friend.id} name={friend.name}/>
  ));
  debugger
  return friendItem;
};

export default Friends;
