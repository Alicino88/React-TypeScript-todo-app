import React from "react";
import { useRef } from "react";

//Passing a function as a prop in TS:
//need to define the arguments type, the type of the returned value (in this case void as we don't need return any value).
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  //we must tell TS that initially the value associated to useRef is empty, otherwise it throws an error
  const textInput = useRef<HTMLInputElement>(null);
  const formSubmission = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = textInput.current!.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={formSubmission}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textInput} />
      <button>Add task</button>
    </form>
  );
};

export default NewTodo;
