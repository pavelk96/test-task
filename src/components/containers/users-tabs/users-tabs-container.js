import React,{Component} from 'react';
import {connect} from "react-redux";
import {Divider} from "antd";
import OneList from "../one-list";


class UsersTabsContainer extends Component{

    renderTab = (temperatures) => {
        return (
            <>
                {temperatures.map((elm, idx) => {return(
                    <div key={idx}>
                        <tr className="blocks">
                            <td >{elm.id}</td>
                            <td >{elm.login}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <Divider/>
                    </div>
                )})}
            </>
        )
    }

    render(){
        const {users} = this.props;
        return(
            <table className="container" align="center" border="0px">
                <tbody>
                <tr  className="blocks">
                    <th>ID</th>
                    <th>Login</th>
                    <th>Actions</th>
                </tr>
                {users.map((data, idx) => {return(
                    <tr className="blocks">
                        <OneList arg1={data.id} arg2={data.login} key={idx}/>
                    </tr>
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
}


export default connect(mapStateToProps, null)(UsersTabsContainer);