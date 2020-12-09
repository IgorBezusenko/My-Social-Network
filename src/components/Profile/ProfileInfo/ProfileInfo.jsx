import React from "react";

import s from "./ProfileInfo.module.css";
import { Spinner } from "../../common/spinner/spinner";
import ProfileStatusUseHooks from "./ProfileStatusUseHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Spinner />;
  }
  return (
    <div>
      <div className={s.profileInfo}>
        <img src="https://theinpaint.com/images/example-1-2.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        <div>
          <img src={profile.photos.large} alt="cover" />
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
