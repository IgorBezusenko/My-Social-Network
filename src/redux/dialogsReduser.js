const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
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
};

export const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }

    case SEND_MESSAGE: {
      let newText = {
        id: 6,
        message: state.newMessageText,
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newText);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    default:
      return state;
  }
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