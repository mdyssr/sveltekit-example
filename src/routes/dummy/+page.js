export async function load() {
  const response = await fetch("/api/dummy");
  const dummy = await response.json();
  return {
    dummy,
  };
}
