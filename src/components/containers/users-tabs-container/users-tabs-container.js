import React,{Component} from 'react';
import {connect} from "react-redux";
import {Divider} from "antd";

import OneList from "../one-list";


class UsersTabsContainer extends Component{

    render(){
        const {users} = this.props;
        return(
            <table className="container" align="center" border="0px">
                <tbody>
                <tr className="blocks">
                    <th>ID</th>
                    <th>Login</th>
                    <th>Actions</th>
                </tr>
                {users.map((data, idx) => {return(
                    <React.Fragment key={idx}>
                        <tr className="blocks">
                            <OneList arg1={data.id} arg2={data.login}  index={idx} method={"users"}/>
                        </tr>
                        <Divider/>
                    </React.Fragment>
                )})}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};


export default connect(mapStateToProps, null)(UsersTabsContainer);