import React,{Component} from 'react';
import {connect} from "react-redux";
import {Divider} from "antd";


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
            <table className="container" >
                <thead>
                <tr className="blocks">
                    <th>ID</th>
                    <th>Login</th>
                    <th>Actions</th>
                </tr>
                <Divider/>
                </thead>
                <tbody >
                {this.renderTab(users)}
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