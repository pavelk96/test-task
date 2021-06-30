import React,{Component} from 'react';
import { Divider } from 'antd';
import "./temperatures-tabs-container.css";
import {connect} from "react-redux";


class TemperatureTabsContainer extends Component{


    renderTab = (temperatures) => {
        return (
            <>
                {temperatures.map((elm, idx) => {return(
                    <>
                    <tr  className="blocks">
                        <td >{elm.id}</td>
                        <td >{elm.degree}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <Divider/>
                    </>
                )})}

            </>
        )
}

    render(){
        const {temperatures} = this.props;
        return(
            <table className="container" >
                <thead>
                <tr className="blocks">
                    <th>ID</th>
                    <th>Degree</th>
                    <th>Actions</th>
                </tr>
                <Divider/>
                </thead>
                <tbody >
                {this.renderTab(temperatures)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        temperatures: state.temperatures
    }
}



export default connect(mapStateToProps, null)(TemperatureTabsContainer);