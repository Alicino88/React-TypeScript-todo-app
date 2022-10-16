import React from "react";
import Todo from "../Models/todo";
import TodoItem from "./TodoItem";

//Todo object class is imported and used as a type below:
//items is an array full of objects created using the todo class
const Todos: React.FC<{ items: Todo[]; removeTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          removeTodo={props.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
