import React,{Component} from 'react';
import "./one-list.css"

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

    renderInput = (temperature) =>{
       return this.state.onEdit ? (<>
                <td>
                    <input
                        key={temperature.id}
                        value={temperature.id}
                        disabled={false}
                    />
                </td>
                <td>
                    <input
                        value={temperature.degree}
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
                       key={temperature.id}
                       value={temperature.id}
                       disabled={true}
                   />
               </td>
               <td>
                   <input
                       value={temperature.degree}
                       disabled={true}
                   />
               </td>
               <td>
                   <button onClick={() => this.handleEdit()}>Edit</button>
               </td>
           </>);
    }


    render() {
        const {data} = this.props;
        return (
            <>
                    <tr className="blocks">
                        {this.renderInput(data)}
                    </tr>
            </>
        )
    }
}




export default OneList;