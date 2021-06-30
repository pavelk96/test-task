import { Layout } from 'antd';
import React from "react";
import LeftMenu from "../left-menu";
import {Route} from "react-router-dom";
import TemperaturePage from "../pages/temperatures-page";
import UsersPage from "../pages/users-page";
const { Header, Content, Footer } = Layout;


class App extends React.Component {


    render() {

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <LeftMenu/>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content className="content1">
                        <Route path="/temperatures-page" component={TemperaturePage}/>
                        <Route path="/users-page" component={UsersPage}/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;