<script>
  import { todos } from "$lib/stores/todoStore.js";
  import { applyAction } from "$app/forms";

  let todoText = "";

  async function handleSubmit(event) {
    const data = new FormData(this);

    const response = await fetch(this.action, {
      method: "POST",
      body: data,
    });
    /** @type {import('@sveltejs/kit').ActionResult} */
    const result = await response.json();

    if (result.type === "success") {
      const newTodo = result.data;
      $todos = [...$todos, newTodo];
      this.reset();
    }

    applyAction(result);
  }

  async function toggleCompleteTodo(id) {
    const url = "http://localhost:1323/todos/toggle/" + id;
    const response = await fetch(url, {
      method: "PATCH",
    });

    if (response.ok) {
      $todos = $todos.map((todo) =>
        todo.id !== id ? todo : { ...todo, completed: !todo.completed }
      );
    }
  }

  async function removeTodo(id) {
    const url = "http://localhost:1323/todos/" + id;
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (response.ok) {
      $todos = $todos.filter((todo) => todo.id !== id);
    }
  }
</script>

<h1>Todos</h1>

<!-- named action -->
<form action="?/addTodo" method="POST" on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    bind:value={todoText}
    name="title"
    placeholder="add todo"
  />
  <button type="submit">Add</button>
</form>

{#if $todos.length > 0}
  <ol>
    {#each $todos as { id, title, completed }}
      <div class="todo-item">
        <li class:completed on:click={() => toggleCompleteTodo(id)}>{title}</li>
        <button on:click={() => removeTodo(id)}>remove</button>
      </div>
    {/each}
  </ol>
{:else}
  <p>no todos yet...</p>
{/if}

<style>
  li {
    user-select: none;
    cursor: pointer;
  }
  .todo-item {
    display: flex;
    gap: 8px;
    margin: 8px 0;
  }

  .completed {
    text-decoration: line-through;
  }
</style>
