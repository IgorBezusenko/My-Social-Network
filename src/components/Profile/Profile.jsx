import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        profile={props.profile}
        saveProfile={props.saveProfile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
