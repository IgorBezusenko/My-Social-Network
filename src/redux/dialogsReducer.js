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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newText = {
        id: 6,
        message: action.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newText],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageText) => {
  return {
    type: SEND_MESSAGE,
    newMessageText,
  };
};
