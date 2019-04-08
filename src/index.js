import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';


const root = document.querySelector('#root');
const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awsome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
    ];

    return(
    <div className = "container ">
        <AppHeader />
        <TodoList todos = {todoData} />
        <SearchPanel />
    </div>
    );
};

ReactDOM.render(<App />, root);