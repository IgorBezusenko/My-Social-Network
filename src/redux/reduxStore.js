import { combineReducers, createStore } from "redux";
import { dialogsReduser } from "./dialogsReduser";
import { profileReducer } from "./profileReducer";
import { sidebarReduser } from "./sidebarReduser";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReduser,
  sidebar: sidebarReduser,
});

export let store = createStore(rootReducer);
