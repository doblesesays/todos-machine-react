import React from 'react';
import { CompleteIcon, DeleteIcon } from '../TodoIcon/Icons';
import './TodoItem.css';

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <CompleteIcon>
                completed={props.completed}
                onComplete={props.onComplete}
            </CompleteIcon>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <DeleteIcon>
                onDelete={props.onDelete}
            </DeleteIcon>
        </li>
    );
}

export { TodoItem };