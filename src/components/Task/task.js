import React, { Component } from 'react';
import './task.css'
// import { formatDistanceToNow } from 'date-fns';

export default class Task extends Component {

    state = {
        status: 'active'
    }

    setStatus = () => {
        this.setState(({status}) => {
            let newStatus;
            status === 'active' ? newStatus = 'completed' : newStatus = 'active'
            return {
                status: newStatus
            }
        })
    }

    render() {
        const { text, deleteItem } = this.props;
        const { status } = this.state;



        let editingInput;
        if (status === 'editing') {
            editingInput = (
                <input type="text" className="edit" defaultValue="Editing task" />
            );
        }

        return (
            <li className={status}>
                <div className="view">
                    <input className="toggle" 
                            type="checkbox" 
                            onChange={this.setStatus}/>
                    <label>
                        <span className="description">{text}</span>
                        <span className="created"></span>
                    </label>
                    <button className="icon icon-edit">edit</button>
                    <button className="icon icon-destroy" onClick={deleteItem}>
                        delete
                    </button>
                </div>
                {editingInput}
            </li>
        );
    }
}
