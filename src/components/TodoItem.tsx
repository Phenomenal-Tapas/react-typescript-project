import React from "react";
import classes from "./styles/TodoItem.module.css";

interface Props {
  text: string;
  onRemoveTodo: () => void;
}

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
