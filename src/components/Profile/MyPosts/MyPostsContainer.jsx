import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import s from "./MyPosts.module.css";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage;

  const onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={onAddPost}
      posts={state.posts}
      newPostText={state.newPostText}
    />
  );
};
export default MyPostsContainer;
