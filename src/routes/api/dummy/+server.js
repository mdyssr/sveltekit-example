import { json } from "@sveltejs/kit";

// /api/random
const url = "https://dummyjson.com/products/1";

export async function GET() {
  const respone = await fetch(url);
  const data = await respone.json();
  return json(data);
}
