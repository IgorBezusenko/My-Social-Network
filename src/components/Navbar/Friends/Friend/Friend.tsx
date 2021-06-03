import React from "react";
import s from "./../Friends.module.css";

type PropsType = {
    name:string
}

const Friend:React.FC<PropsType> = (props) => {
  return (
    <div className={s.friend}>
      <img src="https://i.insider.com/5eb47f80fc593d23461aa232?width=1100&format=jpeg&auto=webp" />
      <div>{props.name}</div>
    </div>
  );
};

export default Friend;
