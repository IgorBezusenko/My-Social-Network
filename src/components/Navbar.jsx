import React from "react";
import s from "./Navbar.module.css";

const Navbar = ()=>{
    return(
        <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>Profile</div>
        <div className={s.item}>Masseges</div>
        <div className={s.item}>News</div>
        <div className={s.item}>Music</div>
        <div className={s.item}>Setting</div>
      </nav>
    )
}
export default Navbar;