import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Игорь" id="1" />
        <DialogItem name="Юля" id="2" />
        <DialogItem name="Антонио" id="3" />
        <DialogItem name="Жулик" id="4" />
        <DialogItem name="Жулик" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Привет!" />
        <Message message="Как твое ничего?!" />
        <Message message="Мээээн!" />
        <Message message="Мээээн!" />
        <Message message="Мээээн!" />
      </div>
    </div>
  );
};
export default Dialogs;
