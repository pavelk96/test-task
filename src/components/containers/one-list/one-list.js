import "./one-list.css"
import {deleteLine, saveLine} from "../../../actions";
import {Button} from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    CheckOutlined,
    CloseOutlined
} from '@ant-design/icons';
import {connect} from "react-redux";
import React,{Component} from 'react';


class OneList extends Component {


    state = {
        onEdit: false,
        data:{
            arg1:this.props.arg1,
            arg2:this.props.arg2
        }
    };


    handleEdit = () => {
        this.setState({onEdit: true})
    };

    cancelEdit = () => {
        this.setState({onEdit: false})
    };

    handleDel = (index, method) => {
        this.props.deleteLine(index, method)
    };

    handleSave = () => {
        const { index, method, saveLine } = this.props;
        const { data } = this.state;
        saveLine(index, method, data);
        this.cancelEdit();
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({data: {...this.state.data,[name]:value}})
    }


    render() {
        console.log(this.state)
        const { onEdit, data } = this.state;
        const { arg1, arg2 } = data;
        const { index, method } = this.props;
        return (
                    <>
                        <td>
                            <input
                                name="arg1"
                                className={onEdit ? "input-edit" : "input"}
                                value={arg1}
                                disabled={!onEdit}
                                onChange={this.handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="arg2"
                                className={onEdit ? "input-edit" : "input"}
                                value={arg2}
                                disabled={!onEdit}
                                onChange={this.handleChange}
                            />
                        </td>
                        <td>
                            {onEdit ? (<>
                                <Button icon={<CheckOutlined />} onClick={this.handleSave}/>
                                <Button icon={<CloseOutlined />} onClick={this.cancelEdit}/>
                            </>) : (
                                <>
                                    <Button icon={<EditOutlined />} onClick={this.handleEdit}/>
                                    <Button icon={<DeleteOutlined />} onClick={() => this.handleDel(index, method)}/></>)}
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
}

export default connect(null, mapDispatchToProps)(OneList);