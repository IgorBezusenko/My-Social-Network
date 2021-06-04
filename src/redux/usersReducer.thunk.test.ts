import {actions, follow, unfollow} from "./usersReducer";
import {usersAPI} from "../API/users-apiI";
import {ApiResponseType, ResultCodesEnum} from "../API/api";

jest.mock("../API/users-apiI")
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(()=>{
    dispatchMock.mockClear()
    getStateMock.mockClear()
    userAPIMock.follow.mockClear()
    userAPIMock.unfollow.mockClear()
})

const result: ApiResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}
userAPIMock.follow.mockReturnValue(Promise.resolve(result))
userAPIMock.unfollow.mockReturnValue(Promise.resolve(result))


test("thunk follow success", async () => {
    const thunk = follow(1)

    await thunk(dispatchMock, getStateMock,{})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})

test("thunk unfollow success", async () => {
    const thunk = unfollow(1)

    await thunk(dispatchMock, getStateMock,{})
    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1))
})