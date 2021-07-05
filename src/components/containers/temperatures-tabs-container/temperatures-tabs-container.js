import React,{Component} from 'react';
import {connect} from "react-redux";
import {Divider} from "antd";

import "./temperatures-tabs-container.css";
import OneList from "../one-list";


class TemperatureTabsContainer extends Component{


    render(){
        const {temperatures} = this.props;
        console.log(temperatures)

        return(
            <table className="container" align="center" border="0px">
                <tbody>
                <tr  className="blocks">
                    <th>ID</th>
                    <th>Degree</th>
                    <th>Actions</th>
                </tr>
                {temperatures.map((data, idx) => {return(
                    <React.Fragment key={idx}>
                        <tr className="blocks">
                            <OneList
                                arg1={data.id}
                                arg2={data.degree}
                                index={idx}
                                method={"temperatures"}/>
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
        temperatures: state.temperatures
    }
};

export default connect(mapStateToProps, null)(TemperatureTabsContainer);