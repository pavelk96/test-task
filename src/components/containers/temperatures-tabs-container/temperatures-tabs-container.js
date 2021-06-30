import React,{Component} from 'react';
import { Divider } from 'antd';
import "./temperatures-tabs-container.css";
import {connect} from "react-redux";
import OneList from "../one-list";


class TemperatureTabsContainer extends Component{


    render(){
        const {temperatures} = this.props;
        return(
            <table border="1" className="container">
                <tr  className="blocks">
                    <th>ID</th>
                    <th>Degree</th>
                    <th>Actions</th>
                </tr>
                {temperatures.map((data, idx) => {return(
                    <OneList data={data} key={idx}/>
                )})}

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