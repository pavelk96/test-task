import { Layout, Menu } from 'antd';
import { UserOutlined, BarsOutlined, LogoutOutlined } from '@ant-design/icons';
import {connect} from "react-redux";
import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";
import {logout} from "../../actions";
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
                    <Menu.Item key="3" icon={<LogoutOutlined />}>
                        <Link onClick={this.props.logout}>Logout</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(LeftMenu);