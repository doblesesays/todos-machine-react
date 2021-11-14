import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [text, setText] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== '') {
        addTodo(text);
        setOpenModal(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Writte you new Todo</label>
      <textarea
        value={text}
        onChange={onChange}
        placeholder="Writte you new Todo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Add TODO
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
