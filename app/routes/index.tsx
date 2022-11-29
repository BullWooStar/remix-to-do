import TodoInput from "~/component/TodoInput";
import TodoList from "~/component/TodoList";
import { redirect } from "@remix-run/node";
import {
  addTodo,
  getTodos,
  deleteTodo,
  deleteAllTodos,
  toogleTodo,
} from "~/api/todoApi";
import { useLoaderData } from "@remix-run/react";

export default function Index() {
  const todos = useLoaderData();

  return (
    <div>
      <h1>Remix Todo List</h1>
      <TodoInput />
      <TodoList todos={todos} />
    </div>
  );
}

export async function loader() {
  const todos = await getTodos();
  console.log(todos);
  return todos;
}

export async function action({ request }: any) {
  const formData = await request.formData();
  const actionType = formData.get("_action");
  const todoId = formData.get("todoId");

  switch (actionType) {
    case "add-todo":
      const todoInputData = formData.get("todoInput");
      await addTodo(todoInputData);
      return redirect("/");

    case "delete-todo":
      await deleteTodo(todoId);
      return redirect("/");

    case "delete-all-todo":
      await deleteAllTodos();
      return redirect("/");

    case "toogle-todo":
      await toogleTodo(todoId);
      return redirect("/");
  }
}
