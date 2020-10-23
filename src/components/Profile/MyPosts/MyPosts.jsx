import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 52 },
  { id: 2, message: "Its my first post.", likesCount: 25 },
  { id: 3, message: "Hi, man", likesCount: 45 },
  { id: 4, message: "The post.", likesCount: 21 },
];

let postsElements = posts.map((post) => (
  <Post message={post.message} likesCount={post.likesCount} />
));
const MyPosts = (props) => {
  return (
    <div className={s.postsBlok}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
