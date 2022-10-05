const url = "http://localhost:1323/todos";

export const actions = {
  addTodo: async ({ request }) => {
    const data = await request.formData();
    const title = data.get("title");

    // call the api
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    const newTodo = await response.json();
    return newTodo;
  },
};
