import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likesCount="54" />
        <Post message="Its my first post." likesCount="14" />
      </div>
    </div>
  );
};
export default MyPosts;
