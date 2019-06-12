import React from 'react'
import style from './TodoList.css';

const TodoList = (props) => {
    return (
        <ul>
            {props.list && props.list.map((item) => (<li>{item.text}</li>))}
        </ul>
    );
};

export default TodoList;