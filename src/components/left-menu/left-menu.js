import { Layout, Menu } from 'antd';
import { UserOutlined, BarsOutlined } from '@ant-design/icons';
import React from "react";
import {Component} from "react";
const { Sider } = Layout;

class LeftMenu extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        User
                    </Menu.Item>
                    <Menu.Item key="2" icon={<BarsOutlined />}>
                        Temperatures
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default LeftMenu;