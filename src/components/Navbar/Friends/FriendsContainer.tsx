import {connect} from "react-redux";
import Friends from "./Friends";
import {AppStateType} from "../../../redux/reduxStore";

type MapPropsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.sidebar.friends,
    };
};

const FriendsContainer = connect<MapPropsType, {}, {}, AppStateType>(
    mapStateToProps, {})(Friends);

export default FriendsContainer;