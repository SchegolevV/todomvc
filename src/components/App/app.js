import React, { Component } from 'react';

import Header from '../Header/header';
import TaskList from '../TaskList/taskList';
import Footer from '../Footer/footer';

export default class App extends Component {
    maxID = 0;

    state = {
        taskData: [],
    };

    createNewTask(text) {
        return {
            text: text,
            status: 'active',
            key: this.maxID++,
            hidden: false,
        };
    }

    changeTaskStatus = (key) => {
        this.setState(({ taskData }) => {
            let newStatus;
            const oldItem = taskData.find((task) => task.key === key);
            oldItem.status === 'active'
                ? (newStatus = 'completed')
                : (newStatus = 'active');

            const newData = taskData.map((task) =>
                task === oldItem ? { ...task, status: newStatus } : task
            );
            return {
                taskData: newData,
            };
        });
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

    addItem = (text) => {
        const newItem = this.createNewTask(text);

        this.setState(({ taskData }) => {
            const newData = taskData.toSpliced(taskData.length, 0, newItem);
            return {
                taskData: newData,
            };
        });
    };
    filterTask = (e) => {
        if (e.target.value === 'all') {
            this.setState(({ taskData }) => {
                const newData = taskData.map((task) => {
                    return { ...task, hidden: false };
                });
                return {
                    taskData: newData,
                };
            });
        } else {
            this.setState(({ taskData }) => {
                const newData = taskData.map((task) => {
                    if (e.target.value !== task.status) {
                        return { ...task, hidden: true };
                    }
                    return { ...task, hidden: false };
                });
                return {
                    taskData: newData,
                };
            });
        }
    };

    clearCompleted = () => {
        let completed = this.state.taskData.filter((task) => task.status === 'completed');
        completed.forEach((task) => this.deleteItem(task.key));
    };

    render() {
        const { taskData } = this.state;
        let activeCount = taskData.filter((task) => task.status === 'active').length;

        return (
            <section className="todoapp">
                <Header article="Todos" onAdd={this.addItem} />
                <section className="main">
                    <TaskList
                        className="todo-list"
                        taskProps={taskData}
                        onDelete={this.deleteItem}
                        status={this.state.status}
                        onChangeStatus={this.changeTaskStatus}
                    />
                    <Footer
                        count={activeCount}
                        onClearCompleted={this.clearCompleted}
                        onFilterTask={this.filterTask}
                    />
                </section>
            </section>
        );
    }
}
