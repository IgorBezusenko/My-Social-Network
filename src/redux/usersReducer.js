const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    {
      id: 1,
      name: "Igor",
      followed: true,
      status: "I am a boss",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 2,
      name: "Julia",
      followed: true,
      status: "I am a boss too",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 3,
      name: "Varia",
      followed: false,
      status: "I am a buty",
      location: { city: "Kiev", country: "Ukrain" },
    },
    {
      id: 4,
      name: "Victor",
      followed: true,
      status: "I am a boss",
      location: { city: "Tiraspol", country: "Transnistria" },
    },
  ],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users:[...state.users],
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unFollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
