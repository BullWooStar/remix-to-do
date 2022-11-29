import { Form } from "@remix-run/react";

function TodoInput() {
  return (
    <Form reloadDocument method="post" id="todoInput" className="todoInput">
      <div className="input">
        <p>
          <label htmlFor="todoInput">Todo를 입력하세요</label>
          <input type="text" id="todoInput" name="todoInput" />
        </p>
        <button type="submit" name="_action" value="add-todo">
          추가
        </button>
      </div>
    </Form>
  );
}

export default TodoInput;
