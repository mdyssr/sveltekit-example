import { json } from "@sveltejs/kit";

// POST adds two numbers and returns the result
export async function POST({ request }) {
  const { a, b } = await request.json();
  const result = a + b;
  return json(result);
}
