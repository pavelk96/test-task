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
        data: ""
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

    handleSave = (index, method, data) => {
        this.props.saveLine(index, method, data);
        this.cancelEdit();
    };

    handleChange = (data) => {
        this.setState({data:data})
    }

    renderInput = (arg1, arg2) =>{
        const {onEdit} = this.state;
        const {index, method} = this.props;

       return (
           <>
           <td>
               <input
                   className={onEdit ? "input-edit" : "input"}
                   placeholder={arg1}
                   disabled={!onEdit}
                   onChange={(e) => {this.handleChange(e.target.value)}}
               />
           </td>
           <td>
               <input
                   className={onEdit ? "input-edit" : "input"}
                   placeholder={arg2}
                   disabled={!onEdit}
                   onChange={(e) => {this.handleChange(e.target.value)}}
               />
           </td>
           <td>
               {onEdit ? (<>
                       <Button icon={<CheckOutlined />} onClick={() => this.handleSave(index, method, this.state.data)}/>
                       <Button icon={<CloseOutlined />} onClick={() => this.cancelEdit()}/>
                   </>) : (
                       <>
                       <Button icon={<EditOutlined />} onClick={() => this.handleEdit()}/>
                       <Button icon={<DeleteOutlined />} onClick={() => this.handleDel(index, method)}/></>)}
           </td>
       </>
       )
    }

    render() {
        const {arg1, arg2} = this.props;

        return (
                    <>
                        {this.renderInput(arg1, arg2)}
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