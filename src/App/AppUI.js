import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { Modal } from "../modal";
import { TodoForm } from "../TodoForm";
import { Loading } from "../Loading";

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />
                <TodoList>
                    { error && <p>Dispair...</p> }
                    { loading && <Loading></Loading> }
                    { (!loading && !searchedTodos.length) && <p>Create your first todo...</p> }
                    {
                        searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                todo={todo}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))
                    }
                </TodoList>

            { openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </>
    );
}

export { AppUI };