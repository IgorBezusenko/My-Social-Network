import {
  addPostActionCreator,
  deletePost,
  profileReducer,
} from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 52 },
    { id: 2, message: "Its my first post.", likesCount: 25 },
    { id: 3, message: "Hi, man", likesCount: 45 },
    { id: 4, message: "The post.", likesCount: 21 },
  ],
};

it("new post should de added", () => {
  // 1. test data
  let action = addPostActionCreator("I am a progrmmer");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expect
  expect(newState.posts.length).toBe(5);
});

it("new post should de correct", () => {
  // 1. test data
  let action = addPostActionCreator("I am a progrmmer");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expect
  expect(newState.posts[4].message).toBe("I am a progrmmer");
});

it("delete post length of message should de decrement ", () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expect
  expect(newState.posts.length).toBe(3);
});
