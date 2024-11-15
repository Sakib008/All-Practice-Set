import { useContext, useEffect } from "react";

import { TodoHeader } from "../components/todo/todoHeader";
import { TodoContext } from "../Contexts/todoContext";
import { TodoCard } from "../components/todo/todoCard";

export function Todo() {
  const { isLoading, fetchTodo, todoItem } = useContext(TodoContext);

  useEffect(() => {
    if (todoItem.length === 0) {
      fetchTodo();
    }
  });

  return (
    <div class="">
      <h1 className="text-5xl text-green-300 mt-2 text-center font-semibold underline underline-offset-8 decoration-2 ">
        This is Set 2 &#10088; To-Do &#10089;{" "}
      </h1>
      <TodoHeader />
      { isLoading && <p>Loading...</p>}
      {todoItem.map((product) => (
        <TodoCard key={product.id} todo={product} />
      ))}
    </div>
  );
}
