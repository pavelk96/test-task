import { Layout, Menu } from 'antd';
import { UserOutlined, BarsOutlined } from '@ant-design/icons';
import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";
const { Sider } = Layout;

class LeftMenu extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {

        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" >
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link to="/users-page">Users</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<BarsOutlined />}>
                        <Link to="/temperatures-page">Temperatures</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default LeftMenu;