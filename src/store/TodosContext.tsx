import React, { useState } from "react";
import { Todo } from "../models/Todo";

interface ITodos {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

interface Props {
  children: React.ReactNode;
}

const TodosContext = React.createContext<ITodos>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const removeTodo = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: ITodos = {
    items: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
