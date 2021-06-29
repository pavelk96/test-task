import { Layout } from 'antd';

import React from "react";
import LeftMenu from "../left-menu";

const { Header, Content, Footer } = Layout;


class App extends React.Component {


    render() {

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <LeftMenu/>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;