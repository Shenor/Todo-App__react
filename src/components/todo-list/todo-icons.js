import React from 'react';
import './todo-list.css';

const  TodoIcon = () => {
return (
    <span className = "todo-icon"> 
        <i class="material-icons icon-cancel">cancel</i>
        <i class="material-icons icon-add_circle">add_circle</i>
    </span>
);
};

export default TodoIcon;