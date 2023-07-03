import React from 'react';
import Header from '../Header/header';
import TaskList from '../TaskList/taskList';
import Footer from '../Footer/footer';

const App = () => {
    let taskData = [
        {status: 'active', key: 1}, 
        {status: 'editing', key: 2}, 
        {status: 'completed', key: 3}
    ];
    let taskCount = 1;
    return (
        <section className="todoapp">
            <Header article="Todos" className="header" />
            <section className='main'>
                <TaskList className="todo-list" taskProps={taskData} />
                <Footer count={taskCount}/>
            </section>
        </section>
    );
};

export default App;
