import React from "react";
import "./App.css";
import Todos from "./Components/Todos";
import todo from "./Models/todo";

function App() {
  const todos = [new todo("Learn React"), new todo("rest")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
