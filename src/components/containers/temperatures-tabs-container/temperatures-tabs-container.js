import React,{Component} from 'react';
import "./temperatures-tabs-container.css";
import {connect} from "react-redux";
import OneList from "../one-list";


class TemperatureTabsContainer extends Component{


    render(){
        const {temperatures} = this.props;
        return(
            <table className="container" align="center" border="0px">
                <tbody>
                <tr  className="blocks">
                    <th>ID</th>
                    <th>Degree</th>
                    <th>Actions</th>
                </tr>
                {temperatures.map((data, idx) => {return(
                    <tr className="blocks">
                        <OneList arg1={data.id} arg2={data.degree} key={idx}/>
                    </tr>
                )})}
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