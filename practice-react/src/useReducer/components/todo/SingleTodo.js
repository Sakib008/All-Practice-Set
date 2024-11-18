import React, { useContext } from "react";

import { TodoContext } from "../../Contexts/todoContext";
import { TodoCard } from "./todoCard";

const SingleTodo = () => {
  const { singleTodo } = useContext(TodoContext);

  return <TodoCard {...singleTodo} isSingle isDone={false} />;
};

export default SingleTodo;
