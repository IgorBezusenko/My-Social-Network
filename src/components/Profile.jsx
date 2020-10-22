import React from "react";
import s from "./Profile.module.css";

const Profile = ()=>{
    return(
      <div className={s.content}>
      <div>
        <img src="https://theinpaint.com/images/example-1-2.jpg" />
      </div>
      <div>ava + description</div>
      <div>
        My post
        <div> new post</div>
        <div className={s.posts}>
          <div className={s.item}>post 1</div>
          <div className={s.item}>post 2</div>
        </div>
      </div>
    </div>
    )
}
export default Profile;