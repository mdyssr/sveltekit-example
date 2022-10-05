<script>
  import { todos } from "$lib/stores/todoStore.js";

  export let data;
  // set $todos to data from load function in `+page.server.js`
  todos.set(data.todos);
</script>

<svelte:head>
  <title>My Svelte App</title>
</svelte:head>

<nav>
  <a href="/">Home</a>
  <a href="/add">Add</a>
  <a href="/dummy">Dummy</a>
  <a href="/todos">Todos</a>
  <a href="/store">Stores</a>
</nav>

<slot />
