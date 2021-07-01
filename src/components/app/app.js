import LeftMenu from "../left-menu";
import TemperaturePage from "../pages/temperatures-page";
import UsersPage from "../pages/users-page";
import AuthPage from "../pages/auth-page";
import {Route, Redirect} from "react-router-dom";
import React from "react";
import { Layout } from 'antd';
import {connect} from "react-redux";


const { Header, Content, Footer } = Layout;
class App extends React.Component {


    render() {


        const {isAuthenticated} = this.props;

        return (
            <>
                {isAuthenticated ? <>
                    <Layout style={{ minHeight: '100vh' }}>
                        <LeftMenu/>
                        <Layout className="site-layout">
                            <Header className="site-layout-background" style={{ padding: 0 }} />
                            <Content className="content1">
                                <Route exact path="/login" render={() => isAuthenticated && (<Redirect to="/" />)} />

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
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(App);