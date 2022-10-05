import { PRIVATE_TODO_URL as url } from "$env/static/private";

// get todos: /api/todos
// const url = "http://localhost:1323/todos";

export async function load() {
  // console.log(PUBLIC_TODO_URL.length);

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw error(400, "Error");
  }

  return {
    todos: data,
  };
}
