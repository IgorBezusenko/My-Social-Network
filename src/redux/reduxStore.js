import { combineReducers, createStore } from "redux";
import { dialogsReduser } from "./dialogsReduser";
import { profileReducer } from "./profileReducer";
import { sidebarReduser } from "./sidebarReduser";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReduser,
  sidebar: sidebarReduser,
  usersPage: usersReducer,
  auth: authReducer,
});

export let store = createStore(rootReducer);
