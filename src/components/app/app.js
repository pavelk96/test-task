import React from "react";
import {Route, Redirect} from "react-router-dom";
import {Layout} from 'antd';
import {connect} from "react-redux";

import LeftMenu from "../left-menu";
import TemperaturePage from "../pages/temperatures-page";
import UsersPage from "../pages/users-page";
import AuthPage from "../pages/auth-page";
import {checkLogin} from "../../actions/index"
import {withRouter} from "react-router";


const { Header, Content, Footer } = Layout;

class App extends React.Component {

    componentDidMount() {
        const {checkLogin} = this.props;
        checkLogin()
    }



    render() {
        const {isAuthenticated} = this.props;
        return (
                <>
                    {isAuthenticated ? <>
                        <Layout style={{ minHeight: '100vh' }}>
                            <LeftMenu/>
                            <Layout className="site-layout">
                                <Header className="site-layout-background" style={{ padding: 0 }} >
                                </Header>
                                <Content className="content1">
                                    <Route exact path="/login" history={this.props.history} render={() => isAuthenticated && (<Redirect to="/" />)} />
                                    <Route exact path="/temperatures-page" component={TemperaturePage}/>
                                    <Route exact path="/users-page" component={UsersPage}/>
                                </Content>
                                <Footer style={{ textAlign: 'center' }}>©2021 Created by Kedov Pavel</Footer>
                            </Layout>
                        </Layout>
                    </> : <>
                        <Route exact path="/login" component={AuthPage}/>
                        <Redirect to="/login"/>
                    </>
                    }
                </>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkLogin: () => dispatch(checkLogin())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));