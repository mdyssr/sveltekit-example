import { writable } from "svelte/store";

// the dummy todos store
export const dummyTodos = writable(["say hello", "learn sveltekit"]);

// the todo store
export const todos = writable([]);
