import React from 'react';
import { TodoIcon } from "./index";

function CompleteIcon({completed, onComplete}) {
    return (
        <TodoIcon
            type="check"
            color={completed ? '#4caf50' : 'grey'}
            onclick={onComplete}
        >
        </TodoIcon>
    );
}

function DeleteIcon({onDelete}) {
    return (
        <TodoIcon
            type="delete"
            onclick={onDelete}
        >
        </TodoIcon>
    );
}

export { CompleteIcon, DeleteIcon };
