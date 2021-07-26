import React from "react";
import {Link} from "react-router-dom";
import {Avatar, Button, Col, Menu, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {Header} from "antd/es/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, selectUserCurrentLogin} from "../../redux/authSelectors";
import {logout} from "../../redux/authReducer";

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}

export const AppHeader: React.FC = (props) => {
    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectUserCurrentLogin)

    const dispatch = useDispatch()

    const logoutCallBack = () => {
        dispatch(logout())
    }


    return (
        <Header className="header">
            <div className="logo"/>
            <Row>
                <Col span={18}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">
                            <Link to="/users">
                                Users
                            </Link>
                        </Menu.Item>
                        {/*<Menu.Item key="2">nav 2</Menu.Item>*/}
                        {/*<Menu.Item key="3">nav 3</Menu.Item>*/}
                    </Menu>
                </Col>


                {isAuth ? (
                    <>
                        <Col span={1}>
                            <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                        </Col>
                        <Col span={5}>
                            <Button onClick={logoutCallBack}>Log out</Button>
                        </Col>
                    </>
                ) : (
                    <Col span={6}>
                        <Button>
                            <Link to={"/login"}>Login</Link>
                        </Button>
                    </Col>
                )}

            </Row>
        </Header>
        // // <header className={s.header}>
        // //     <img
        // //         src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"/>
        // //     <div className={s.login}>
        // //         {props.isAuth ? (
        // //             <div>
        // //                 {props.login}
        // //                 <button onClick={props.logout}>Log out</button>
        // //             </div>
        // //         ) : (
        // {/*            <NavLink to={"/login"}>Login</NavLink>*/}
        // {/*        )}*/}
        // {/*    </div>*/}
        // {/*</header>*/}
    );
};

