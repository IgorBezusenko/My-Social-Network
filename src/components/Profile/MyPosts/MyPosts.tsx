import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AddNewPostReduxForm, AddPostValueType} from "./AddNewPostForm/AddNewPostForm";
import {PostType} from "../../../types/types";

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}
const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let postsElements = props.posts.map((post) => (
        <Post
            key={post.message}
            message={post.message}
            likesCount={post.likesCount}
        />
    ));

    const onAddPost = (value: AddPostValueType) => {
        props.addPost(value.newPostText);
        value.newPostText = "";
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
