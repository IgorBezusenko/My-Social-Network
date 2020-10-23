import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.insider.com/5eb47f80fc593d23461aa232?width=1100&format=jpeg&auto=webp" />
      {props.message}
      <div>
        <span>like {props.like}</span>
      </div>
    </div>
  );
};
export default Post;
