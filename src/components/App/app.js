import React, { Component } from 'react';
import Header from '../Header/header';
import TaskList from '../TaskList/taskList';
import Footer from '../Footer/footer';

export default class App extends Component {
    state = {
        taskData: [
            { text: 'text', status: 'active', key: 1 },
            { text: 'text', status: 'editing', key: 2 },
            { text: 'text', status: 'completed', key: 3 },
        ],
    };

    deleteItem = (key) => {
        this.setState(({ taskData }) => {
            const idx = taskData.findIndex((el) => el.key === key);
            const newData = taskData.toSpliced(idx, 1);

            return {
                taskData: newData,
            };
        });
    };

    taskCount = 1;
    render() {
        return (
            <section className="todoapp">
                <Header article="Todos" className="header" />
                <section className="main">
                    <TaskList className="todo-list" 
                                taskProps={this.state.taskData} 
                                onDelete = {this.deleteItem}/>
                    <Footer count={this.taskCount} />
                </section>
            </section>
        );
    }
}
