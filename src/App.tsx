import React from "react";
import "./App.css";
import Todos from "./Components/Todos";
import todo from "./Models/todo";
import NewTodo from "./Components/NewTodo";
import { useState } from "react";

function App() {
  //initially, todos is an ampty array that will accept objects of the todo type
  const [todos, setTodos] = useState<todo[]>([]);
  const addText = (todoText: string) => {
    const newTodo = new todo(todoText);
    //to update state based on the previus state the function form is used:
    setTodos((previousTodos) => {
      return previousTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((previousTodos) => {
      return previousTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addText} />
      <Todos items={todos} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
