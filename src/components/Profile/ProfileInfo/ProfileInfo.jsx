import React from "react";

import s from "./ProfileInfo.module.css";
import { Spinner } from "../../common/spinner/spinner";

const ProfileInfo = (props) => {
  console.log(props);
  if (!props.profile) {
    return <Spinner />;
  }
  return (
    <div>
      <div className={s.profileInfo}>
        <img src="https://theinpaint.com/images/example-1-2.jpg" />
      </div>
      <div className={s.descriptionBlok}>
        <div>
          <img src={props.profile.photos.large} alt="cover" />
        </div>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.fullName}</div>
        <div>
          <strong>Contacts: </strong>
          <div>{props.profile.contacts.facebook}</div>
          <div>{props.profile.contacts.github}</div>
          <div>{props.profile.contacts.instagram}</div>
          <div>{props.profile.contacts.mainLink}</div>
          <div>{props.profile.contacts.twitter}</div>
          <div>{props.profile.contacts.vk}</div>
          <div>{props.profile.contacts.website}</div>
          <div>{props.profile.contacts.youtube}</div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
