import {InferActionsTypes} from "./reduxStore";

const SEND_MESSAGE = "SEND_MESSAGE";

type DialogType = {
  id: number;
  name: string;
};
type MessageType = {
  id: number;
  message: string;
};

const initialState = {
  dialogs: [
    { id: 1, name: "Игорь" },
    { id: 2, name: "Юля" },
    { id: 3, name: "Антонио" },
    { id: 4, name: "Жулик" },
    { id: 5, name: "Виктор" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Привет!" },
    { id: 2, message: "Как твое ничего?" },
    { id: 3, message: "Мээээн!" },
    { id: 4, message: "Мээээн!" },
    { id: 5, message: "Мээээн!" },
  ] as Array<MessageType>,
};

export const dialogsReducer = (
  state = initialState,
  action: ActionsType
): InitialSateType => {
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


export const dialogActions = {
  sendMessage: (newMessageText: string) => ({type: SEND_MESSAGE, newMessageText,} as const)
}

export type InitialSateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof dialogActions>
