const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
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
    if (action.type === ADD_POST) {
      const newpost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newpost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber();
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber();
    } else if (action.type === SEND_MESSAGE) {
      let newText = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.newMessageText = "";
      this._state.dialogsPage.messages.push({
        id: 6,
        message: newText,
      });

      this._callSubscriber();
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageTextCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

export default store;
window.store = store;
