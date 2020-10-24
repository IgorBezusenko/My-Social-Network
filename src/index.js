import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 52 },
  { id: 2, message: "Its my first post.", likesCount: 25 },
  { id: 3, message: "Hi, man", likesCount: 45 },
  { id: 4, message: "The post.", likesCount: 21 },
];
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

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById("root")
);
