type FriendsType = { id: number; name: string };

const initialState = {
  friends: [
    { id: 3, name: "Антонио" },
    { id: 4, name: "Жулик" },
    { id: 5, name: "Виктор" },
  ] as Array<FriendsType>,
};

type InitialStateType = typeof initialState;

export const sidebarReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  return state;
};
