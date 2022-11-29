import { Form } from "@remix-run/react";

function TodoList({ todos }: any) {
  return (
    <div>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo._id} className="todoList">
            <Form method="put">
              <input type="hidden" name="todoId" value={todo._id} />
              <button type="submit" name="_action" value="toogle-todo">
                완료
              </button>
            </Form>
            <span className={todo.isCompleted ? "todoDone" : ""}>
              {todo.content}
            </span>

            <Form method="delete">
              <input type="hidden" name="todoId" value={todo._id} />
              <button type="submit" name="_action" value="delete-todo">
                삭제
              </button>
            </Form>
          </li>
        ))}
      </ul>
      <Form method="delete" id="allDeleteButton">
        <button type="submit" name="_action" value="delete-all-todo">
          모두삭제
        </button>
      </Form>
    </div>
  );
}

export default TodoList;
