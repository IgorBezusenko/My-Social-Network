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
    },
    sidebar: {
      friends: [
        { id: 3, name: "Антонио" },
        { id: 4, name: "Жулик" },
        { id: 5, name: "Виктор" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state update");
  },
  addPost() {
    const newpost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newpost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber();
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
