import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

type PropsType = {
    id:number
    name: string
}

const DialogItem:React.FC<PropsType> = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialog/${props.id}`} activeClassName={s.active}>
        <img src="https://i.insider.com/5eb47f80fc593d23461aa232?width=1100&format=jpeg&auto=webp" />
        {props.name}
      </NavLink>
    </div>
  );
};
export default DialogItem;
