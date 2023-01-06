import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const removeTodo = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id!== todoId);
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todos} handleRemoveTodo={removeTodo}/>
    </div>
  );
}

export default App;
