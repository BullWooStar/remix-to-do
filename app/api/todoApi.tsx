export async function addTodo(enteredValue: any) {
  return await fetch("https://todo-api.roto.codes/choi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `${enteredValue}`,
    }),
  });
}

export async function getTodos() {
  const response = await fetch("https://todo-api.roto.codes/choi");
  return response.json();
}

export async function deleteTodo(id: any) {
  return await fetch(`https://todo-api.roto.codes/choi/${id}`, {
    method: "DELETE",
  });
}

export async function deleteAllTodos() {
  return await fetch("https://todo-api.roto.codes/choi/all", {
    method: "DELETE",
  });
}

export async function toogleTodo(id: any) {
  return await fetch(`https://todo-api.roto.codes/choi/${id}/toggle`, {
    method: "PUT",
  });
}
