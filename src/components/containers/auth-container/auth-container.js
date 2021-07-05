import React from "react";
import { withRouter } from "react-router";
import {Button, Input,} from "antd"
import { EyeInvisibleOutlined, EyeTwoTone, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import "./auth-container.css"

import {fetchLogin, fetchRegistration} from "../../../actions";

class AuthContainer extends React.Component {
    state = {
        login: "",
        password: "",
        firstName:"",
        lastName:"",
        registrationForm: false
    }

    handleLogin = (login) => {
        this.setState({login: login})
    };

    handlePassword = (password) => {
        this.setState({password: password})
    };

    handleFirstName = (firstName) => {
        this.setState({firstName: firstName})
    };

    handleLastName = (lastName) => {
        this.setState({lastName: lastName})
    };

    handleRegistration =  () => {
        const {login, password, firstName, lastName} = this.state;
        const { fetchRegistration } = this.props;
        if (login !== "" && password !== "" && lastName !== "" && firstName !== "")
        fetchRegistration(firstName, lastName, login, password);
    };

    handleLoginForm = () => {
        const { fetchLogin } = this.props;
        const {login, password} = this.state;
        if (login !== "" && password !== "") {
            fetchLogin(login, password);
        }
    };

    visibleRegistrationForm = () => {
        this.setState({registrationForm:!this.state.registrationForm})
    };

    renderLoginForm = (
            <div className="auth-container">
                <div className="auth-form">
                    <Input placeholder="Login" onChange={(e) => this.handleLogin(e.target.value)}/>
                    <Input.Password
                        placeholder="Password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        onChange={(e) => this.handlePassword(e.target.value)}
                    />
                    <Button onClick={this.handleLoginForm}>Login</Button>
                    <Button onClick={this.visibleRegistrationForm}>Registration</Button>
                </div>
            </div>
        );

    renderRegistrationForm = (
        <div className="auth-container">
        <div className="auth-form">
            <Input placeholder="First Name" onChange={(e) => this.handleFirstName(e.target.value)}/>
            <Input placeholder="Last Name" onChange={(e) => this.handleLastName(e.target.value)}/>
            <Input placeholder="Login" onChange={(e) => this.handleLogin(e.target.value)}/>
            <Input.Password
                placeholder="Password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={(e) => this.handlePassword(e.target.value)}
            />
            <Button onClick={this.visibleRegistrationForm} icon={<ArrowLeftOutlined />}/>
            <Button className="btn" onClick={this.handleRegistration} icon={<ArrowRightOutlined />}>Registration</Button>
        </div>
    </div>
    );

    render() {

        return (
            <>
                {this.props.isAuthenticated ? <Redirect to="/"/> : null}
                {this.state.registrationForm ? this.renderRegistrationForm : this.renderLoginForm}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoadingLogin: state.isLoadingLogin,
        isAuthenticated: state.isAuthenticated
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        fetchLogin: fetchLogin(dispatch),
        fetchRegistration: fetchRegistration(dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthContainer));