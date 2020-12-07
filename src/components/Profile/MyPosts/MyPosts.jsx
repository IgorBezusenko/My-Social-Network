import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { AddNewPostReduxForm } from "./AddNewPostForm/AddNewPostForm";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post
      key={post.message}
      message={post.message}
      likesCount={post.likesCount}
    />
  ));

  const onAddPost = (value) => {
    props.addPost(value.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default React.memo(MyPosts);
