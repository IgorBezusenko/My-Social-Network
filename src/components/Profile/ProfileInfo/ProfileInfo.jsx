import React from "react";

import styles from "./ProfileInfo.module.css";
import { Spinner } from "../../common/spinner/spinner";
import ProfileStatusUseHooks from "./ProfileStatusUseHooks";
import userIcon from "../../../assets/image/user.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Spinner />;
  }

  const onPhotosChange = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className={styles.profileInfo}>
        <img src="https://theinpaint.com/images/example-1-2.jpg" alt="cover" />
      </div>
      <div className={styles.descriptionBlock}>
        <div className={styles.profilePhoto}>
          <img src={profile.photos.large || userIcon} alt="cover" />
          {isOwner && <input onChange={onPhotosChange} type={"file"} />}
        </div>

        <ProfileStatusUseHooks status={status} updateStatus={updateStatus} />

        <div>{profile.aboutMe}</div>
        <div>{profile.fullName}</div>
        <div>
          <strong>Contacts: </strong>
          <div>{profile.contacts.facebook}</div>
          <div>{profile.contacts.github}</div>
          <div>{profile.contacts.instagram}</div>
          <div>{profile.contacts.mainLink}</div>
          <div>{profile.contacts.twitter}</div>
          <div>{profile.contacts.vk}</div>
          <div>{profile.contacts.website}</div>
          <div>{profile.contacts.youtube}</div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
