import React from "react";
import {BrowserRouter, Link, Redirect, Route, Switch, withRouter,} from "react-router-dom";
import "./App.css";
import 'antd/dist/antd.css';
import {UsersPage} from "./components/Users/UsersContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/appReducer";
import {Spinner} from "./components/common/spinner/spinner";
import {AppStateType, store} from "./redux/reduxStore";
import {withSuspense} from "./components/hoc/withSuspense";
import {LoginPage} from "./components/Login/loginPage";
import {Breadcrumb, Button, Layout, Menu} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {AppHeader} from "./components/Header/Header";

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

const ProfileContainer = React.lazy(() =>
    import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
    import("./components/Dialogs/DialogsContainer")
);
const ChatPage = React.lazy(()=>import('./pages/Chat/ChatPage'))

const SuspenseDialog = withSuspense(DialogsContainer)
const SuspenseProfile = withSuspense(ProfileContainer)
const SuspenseChatPage = withSuspense(ChatPage)

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
    initializedApp: () => void
}

class App extends React.Component<MapStatePropsType & MapDispatchPropsType> {
    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Spinner/>;
        }
        return (
            <Layout>
                <AppHeader/>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                                    <Menu.Item key="1">
                                        <Link to="/profile">
                                            Profile
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link to="/dialog">
                                            Masseges
                                        </Link>
                                    </Menu.Item>

                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Users">
                                    <Menu.Item key="5">
                                        <Link to="/users">
                                            Users
                                        </Link>
                                    </Menu.Item>

                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Forum">
                                    <Menu.Item key="9"> <Link to="/chat">
                                        Chat
                                    </Link></Menu.Item>

                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Switch>
                                <Route
                                    exact
                                    path={"/"}
                                    render={() => <Redirect to={"/profile"}/>}
                                />
                                <Route
                                    path={"/profile/:userId?"}
                                    render={() => <SuspenseProfile/>}
                                />
                                <Route path={"/dialog"} render={() => <SuspenseDialog/>}/>
                                <Route
                                    path={"/users"}
                                    render={() => <UsersPage pageTitle={"Samurai"}/>}
                                />
                                <Route path={"/login"} render={() => <LoginPage/>}/>
                                <Route path={"/chat"} render={() => <SuspenseChatPage/>}/>
                                <Route path={"/*"} render={() => <div>404 NOT FOUND
                                    <Button type={"primary"}>Ок</Button>
                                </div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Social Network ©2021 Created by Igor Bezusenko</Footer>
            </Layout>
            // <div className="app-wrapper">
            //     <HeaderContainer/>
            //     <Navbar/>
            //     <div className="app-wrapper-content">
            //         <Switch>
            //             <Route
            //                 exact
            //                 path={"/"}
            //                 render={() => <Redirect to={"/profile"}/>}
            //             />
            //             <Route
            //                 path={"/profile/:userId?"}
            //                 render={() => <SuspenseProfile/>}
            //             />
            //             <Route path={"/dialog"} render={() => <SuspenseDialog/>}/>
            //             <Route
            //                 path={"/users"}
            //                 render={() => <UsersPage pageTitle={"Samurai"}/>}
            //             />
            //             <Route path={"/login"} render={() => <LoginPage/>}/>
            //             <Route path={"/*"} render={() => <div>404 NOT FOUND
            //             <Button type={"primary"}>Ок</Button>
            //             </div>}/>
            //         </Switch>
            //     </div>
            // </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized,
    };
};

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedApp})
)(App);

const SocialNetworkApp: React.FC = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    );
};

export default SocialNetworkApp;
