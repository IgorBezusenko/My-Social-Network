import {
  actions,
  profileReducer,
} from "./profileReducer";
import {PostType, ProfileType} from "../types/types";

let state = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: 52},
    {id: 2, message: "Its my first post.", likesCount: 25},
    {id: 3, message: "Hi, man", likesCount: 45},
    {id: 4, message: "The post.", likesCount: 21},
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
};

it("new post should de added", () => {
  // 1. test data
  let action = actions.addPostActionCreator("I am a progrmmer");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expect
  expect(newState.posts.length).toBe(5);
});

it("new post should de correct", () => {
  // 1. test data
  let action = actions.addPostActionCreator("I am a programmer");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expect
  expect(newState.posts[4].message).toBe("I am a programmer");
});

it("delete post length of message should de decrement ", () => {
  // 1. test data
  let action = actions.deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expect
  expect(newState.posts.length).toBe(3);
});
