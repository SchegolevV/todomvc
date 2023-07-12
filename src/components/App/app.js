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
            id: this.maxID++,
            hidden: false,
            time: new Date(),
        };
    }

    changeTaskStatus = (id) => {
        this.setState(({ taskData }) => {
            let newStatus;
            const oldItem = taskData.find((task) => task.id === id);
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

    deleteItem = (id) => {
        this.setState(({ taskData }) => {
            const idx = taskData.findIndex((el) => el.id === id);
            const newData = taskData.toSpliced(idx, 1);

            return {
                taskData: newData,
            };
        });
    };

    editItem = (id) => {
        this.setState(({ taskData }) => {
            const editingTask = taskData.find((el) => el.id === id);
            const newData = taskData.map((task) => {
                if (task === editingTask) {
                    return { ...task, status: 'editing' };
                }
                return task;
            });
            return {
                taskData: newData,
            };
        });
    };

    submitEdit = (id, text) => {
        this.setState(({taskData}) => {
            const oldItem = taskData.find((task) => task.id === id)
            const newData = taskData.map((task) => {
                if (task === oldItem) {
                    return {...task, text: text}
                }
                return task
            })
            return {
                taskData: newData
            }
        })
    }

    addItem = (text) => {
        if (text.trim() === '') return;

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
        completed.forEach((task) => this.deleteItem(task.id));
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
                        onAdd={this.addItem}
                        onDelete={this.deleteItem}
                            onEdit={this.editItem}
                            onSubmitEdit={this.submitEdit}
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
