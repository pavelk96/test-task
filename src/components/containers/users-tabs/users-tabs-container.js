import React,{Component} from 'react';
import {connect} from "react-redux";


class UsersTabsContainer extends Component{

    render(){

        return(
            <>
                users page
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}


export default connect(mapStateToProps, null)(UsersTabsContainer);