import React from "react";
import {useSelector} from "react-redux";
import {Spinner} from "../common/spinner/spinner";
import {getIsFetching,} from "../../redux/userSelectors";
import {Users} from "./Users";


type UsersPagePropsType = {
    pageTitle: string;
}
export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)
    return (
        <>
            {isFetching ? <Spinner/> : null}
            <h2>{props.pageTitle}</h2>
            <Users/>
        </>
    );
}

