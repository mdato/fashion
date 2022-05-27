export async function getItems() {
  const response = await fetch("http://localhost:3001/items");
  if (response.status !== 200)
    throw new Error("There was a problem getting the items.").message;
  return await response.json();
}

export async function getItemById(id: string) {
  const response = await fetch(`http://localhost:3001/items/${id}`);
  if (response.status !== 200)
    throw new Error("There was a problem finding that item.").message;
  return await response.json();
}
