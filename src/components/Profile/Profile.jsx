import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = ()=>{
    return(
      <div className={s.content}>
      <div>
        <img src="https://theinpaint.com/images/example-1-2.jpg" />
      </div>
      <div>ava + description</div>
      <MyPosts/>


      
    </div>
    )
}
export default Profile;