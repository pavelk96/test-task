import React,{Component} from 'react';
import {Button} from "antd";
import {connect} from "react-redux";
import {
    EditOutlined,
    DeleteOutlined,
    CheckOutlined,
    CloseOutlined
} from '@ant-design/icons';

import "./one-list.css"
import {deleteLine, saveLine} from "../../../actions";


class OneList extends Component {


    state = {
        onEdit: false,
        data:{
            arg1:this.props.arg1,
            arg2:this.props.arg2
        }
    };

    handleEdit = () => {
        this.setState({onEdit: !this.state.onEdit})
    };

    handleDel = () => {
        const { index, method, deleteLine } = this.props;
        deleteLine(index, method);
    };

    handleSave = () => {
        const { index, method, saveLine } = this.props;
        const { data } = this.state;
        saveLine(index, method, data);
        this.handleEdit();
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({data: {...this.state.data,[name]:value}})
    };


    render() {
        const { onEdit } = this.state;
        const { arg1, arg2} = this.props;
        return (
                    <>
                        <td>
                            <input
                                name="arg1"
                                className={onEdit ? "input-edit" : "input"}
                                placeholder={arg1}
                                disabled={!onEdit}
                                onChange={this.handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="arg2"
                                className={onEdit ? "input-edit" : "input"}
                                placeholder={arg2}
                                disabled={!onEdit}
                                onChange={this.handleChange}
                            />
                        </td>
                        <td>
                            {onEdit ? (<>
                                <Button icon={<CheckOutlined />} onClick={this.handleSave}/>
                                <Button icon={<CloseOutlined />} onClick={this.handleEdit}/>
                            </>) : (
                                <>
                                    <Button icon={<EditOutlined />} onClick={this.handleEdit}/>
                                    <Button icon={<DeleteOutlined />} onClick={this.handleDel}/></>)}
                        </td>
                    </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteLine: (index, method) => dispatch(deleteLine(index, method)),
        saveLine: (index, method, data) => dispatch(saveLine(index, method, data))
    }
};

export default connect(null, mapDispatchToProps)(OneList);