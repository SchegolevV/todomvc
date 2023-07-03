import React from "react";
import NewTaskForm from "../NewTaskForm/newTaskForm";

const Header = ({article, className}) => {

    return (
        <header className={className}>
            <h1>{article}</h1>
            <NewTaskForm type="text" 
                    placeholder="What needs to be done?"
                    autofocus={true}/>
        </header>
    );
}

export default Header;