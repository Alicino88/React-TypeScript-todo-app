const TodoItem: React.FC<{ text: string; removeTodo: () => void }> = (
  props
) => {
  return <li onClick={props.removeTodo}>{props.text}</li>;
};

export default TodoItem;
