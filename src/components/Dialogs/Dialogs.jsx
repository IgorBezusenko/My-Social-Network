import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

let dialogs = [
  { id: 1, name: "Игорь" },
  { id: 2, name: "Юля" },
  { id: 3, name: "Антонио" },
  { id: 4, name: "Жулик" },
  { id: 5, name: "Виктор" },
];

let messages = [
  { id: 1, message: "Привет!" },
  { id: 2, message: "Как твое ничего?" },
  { id: 3, message: "Мээээн!" },
  { id: 4, message: "Мээээн!" },
  { id: 5, message: "Мээээн!" },
];

let dialogsElement = dialogs.map((dialog) => (
  <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
));

let messagesElement = messages.map((message) => (
  <Message key={message.id} message={message.message} id={message.id} />
));

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>

      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};
export default Dialogs;
