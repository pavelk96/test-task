import React,{Component} from 'react';
import "./one-list.css"
import {Divider} from "antd";

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

    renderInput = (arg1, arg2) =>{
       return this.state.onEdit ? (<>
                <td>
                    <input
                        className="input-edit"
                        value={arg1}
                        disabled={false}
                    />
                </td>
                <td>
                    <input
                        className="input-edit"
                        value={arg2}
                        disabled={false}
                    />
                </td>
                <td>
                    <button>Save</button>
                    <button onClick={() => this.cancelEdit()}>Cancel</button>
                </td>
            </>) : (<>
               <td>
                   <input
                       className="input"
                       value={arg1}
                       disabled={true}
                   />
               </td>
               <td>
                   <input
                       className="input"
                       value={arg2}
                       disabled={true}
                   />
               </td>
               <td>
                   <button onClick={() => this.handleEdit()}>Edit</button>
                   <button onClick={() => this.handleEdit()}>Delete</button>
               </td>
           </>);
    }


    render() {
        const {arg1, arg2} = this.props;

        return (

                    < >
                        {this.renderInput(arg1, arg2)}
                        <Divider/>
                    </>


        )
    }
}




export default OneList;