<script>
  import { dummyTodos, todos } from "$lib/stores/todoStore.js";

  function addTodo() {
    $dummyTodos = [...$dummyTodos, "test todo"];
  }
</script>

<button on:click={addTodo}>Add todo</button>

{#each $todos as { title }}
  <li>{title}</li>
{/each}
