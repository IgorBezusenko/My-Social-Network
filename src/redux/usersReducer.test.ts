import {actions, InitialStateType, usersReducer} from "./usersReducer";

let state: InitialStateType;
beforeEach(() => {
    state = {
        users: [
            {
                id: 0, name: "Igor1", followed: false,
                status: "status 1", photos: {small: null, large: null}
            },
            {
                id: 1, name: "Igor2", followed: false,
                status: "status 2", photos: {small: null, large: null}
            },
            {
                id: 2, name: "Igor2", followed: true,
                status: "status 2", photos: {small: null, large: null}
            },
            {
                id: 3, name: "Igor3", followed: true,
                status: "status 3", photos: {small: null, large: null}
            },
        ],
        pageSize: 10,
        totalUsersCount: 100,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [], // userId
    }
})

test("follow success", () => {
    const newState = usersReducer(state, actions.followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})
test("unfollow success", () => {
    const newState = usersReducer(state, actions.unfollowSuccess(3))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})