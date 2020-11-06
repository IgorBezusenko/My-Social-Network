import React from "react";
import { NavLink } from "react-router-dom";

import FriendsContainer from "./Friends/FriendsContainer";

import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialog" activeClassName={s.activeLink}>
          Masseges
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/setting">Setting</NavLink>
      </div>
      <div className={s.item + " " + s.itemFriends}>
        <NavLink to="/setting">Friends</NavLink>
        <div className={s.friends}>
          <FriendsContainer />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
