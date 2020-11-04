import { dialogsReduser } from "./dialogsReduser";
import { profileReducer } from "./profileReducer";
import { sidebarReduser } from "./sidebarReduser";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 52 },
        { id: 2, message: "Its my first post.", likesCount: 25 },
        { id: 3, message: "Hi, man", likesCount: 45 },
        { id: 4, message: "The post.", likesCount: 21 },
      ],
      newPostText: "New text",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Игорь" },
        { id: 2, name: "Юля" },
        { id: 3, name: "Антонио" },
        { id: 4, name: "Жулик" },
        { id: 5, name: "Виктор" },
      ],
      messages: [
        { id: 1, message: "Привет!" },
        { id: 2, message: "Как твое ничего?" },
        { id: 3, message: "Мээээн!" },
        { id: 4, message: "Мээээн!" },
        { id: 5, message: "Мээээн!" },
      ],
      newMessageText: "",
    },
    sidebar: {
      friends: [
        { id: 3, name: "Антонио" },
        { id: 4, name: "Жулик" },
        { id: 5, name: "Виктор" },
      ],
    },
  },
  _callSubscriber() {
    console.log("state update");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);
    this._callSubscriber();
  },
};

export default store;
window.store = store;
