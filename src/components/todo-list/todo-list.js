import React from 'react';
import TodoListItem from '../todo-list-item';
import TodoIcon from '../todo-list/todo-icons';
import './todo-list.css';


const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return(
            <li key = {id} className = "collection-item">
                <TodoListItem { ...itemProps } />  
                <TodoIcon />
            </li>
        );
    });

    return(
        <ul className = "collection todo-list">
            {elements }
        </ul>
    )
};

export default TodoList;