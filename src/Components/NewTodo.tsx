import React from "react";
import { useRef } from "react";

const NewTodo: React.FC = () => {
  const textInput = useRef<HTMLInputElement>(null);
  const formSubmission = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = textInput.current?.value;
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
