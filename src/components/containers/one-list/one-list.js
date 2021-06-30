import "./one-list.css"
import {deleteLine} from "../../../actions";
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
        onEdit: false
    }

    handleEdit = () => {
        this.setState({onEdit: true})
    }

    cancelEdit = () => {
        this.setState({onEdit: false})
    }

    handleDel = (index, method) => {
        this.props.deleteLine(index, method)
    }

    renderInput = (arg1, arg2) =>{
        const {onEdit} = this.state;
        const {index, method} = this.props;

       return (
           <>
           <td>
               <input
                   className={onEdit ? "input-edit" : "input"}
                   value={arg1}
                   disabled={!onEdit}
               />
           </td>
           <td>
               <input
                   className={onEdit ? "input-edit" : "input"}
                   value={arg2}
                   disabled={!onEdit}
               />
           </td>
           <td>
               {onEdit ? (<>
                       <Button icon={<CheckOutlined />}/>
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
        deleteLine: (index, method) => dispatch(deleteLine(index, method))
    }
}

export default connect(null, mapDispatchToProps)(OneList);