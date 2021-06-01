import {getAuthUserData} from "./authReducer";
import {InferActionsTypes} from "./reduxStore";

const INITIALIZED_SUCCESS = "APP/INITIALIZED_SUCCESS";

const initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>

export const appReducer = (
    state = initialState,
    action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const actions = {
  initializedSuccess: () => ({type: INITIALIZED_SUCCESS})
}

export const initializedApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess());
  });
};
