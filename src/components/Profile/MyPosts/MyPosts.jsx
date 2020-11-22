import React from "react";

import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

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
export default MyPosts;

const AddNewPostForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={"textarea"}
            placeholder="Enter your post"
            name={"newPostText"}
          />
        </div>
        <button>Add post</button>
      </form>
    </div>
  );
};

const AddNewPostReduxForm = reduxForm({
  form: "profileAddPost",
})(AddNewPostForm);
