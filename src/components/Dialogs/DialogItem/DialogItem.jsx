import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialog/${props.id}`} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};
export default DialogItem;
