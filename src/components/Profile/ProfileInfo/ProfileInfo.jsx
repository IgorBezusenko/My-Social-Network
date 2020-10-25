import React from "react";

import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.profileInfo}>
        <img src="https://theinpaint.com/images/example-1-2.jpg" />
      </div>
      <div className={s.descriptionBlok}>ava + description</div>
    </div>
  );
};
export default ProfileInfo;
