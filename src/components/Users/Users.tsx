import React, {useEffect} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import {FilterType, getUsers} from "../../redux/usersReducer";
import {UsersSearchForm} from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUserSelector,
    getUsersFilter
} from "../../redux/userSelectors";
import {useHistory} from "react-router-dom";
import * as queryString from "querystring";


type QueryParamsType = { friend?: string, page?: string, term?: string };
export const Users: React.FC = () => {
    const users = useSelector(getUserSelector);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter);
    const followingInProgress = useSelector(getFollowingInProgress);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType
        let actualCurrentPage = currentPage
        let actualFilter = filter
        if (!!parsed.page) actualCurrentPage = +parsed.page
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term}
        if (!!parsed.friend) actualFilter = {
            ...actualFilter,
            friend: parsed.friend === "null" ? null : parsed.friend === "true" ? true : false
        }

        dispatch(getUsers(actualCurrentPage, pageSize, actualFilter));
    }, []);

    useEffect(() => {
        const query:QueryParamsType = {}
        if (!!filter.term) query.term  = filter.term
        if (filter.friend !== null) query.friend  = String(filter.friend)
        if (currentPage !==1) query.page  = filter.term

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])



    const onPageChange = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, pageSize, filter));
    };
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter));
    };
    const follow = (userId: number) => {
        dispatch(follow(userId))
    };
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    };

    return (
        <div>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator
                currentPage={currentPage}
                onPageChange={onPageChange}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
            />

            {users.map((user) => {
                return (
                    <User
                        user={user}
                        key={user.id}
                        followingInProgress={followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                    />
                );
            })}
        </div>
    );
};

