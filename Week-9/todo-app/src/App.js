import { useState } from "react";
import AddTodo from "./AddTodo";
import "./App.css";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (todo) => {
    console.log(todo);
    const todoItem = {
      id: Date.now(),
      isDone: false,
      todo,
    };

    const newTodoList = [...todoList, todoItem];
    setTodoList(newTodoList);
  };

  const handleChecked = (id, isDone) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === id) item.isDone = isDone;
      return item;
    });

    setTodoList(newTodoList);
  };

  return (
    <div className="container">
      <div className="center">
        <h1> Todo App</h1>
      </div>

        {todoList.map((todoItem) => (
      <div className="row center">
          <TodoItem
            isDone={todoItem.isDone}
            id={todoItem.id}
            todo={todoItem.todo}
            onChange={handleChecked}
          />
      </div>
        ))}
      <div className="mt-3 row center">
        <AddTodo onSubmit={handleAddTodo} />
      </div>
    </div>
  );
}

export default TodoApp;
