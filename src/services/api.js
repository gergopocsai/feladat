const url = "http://192.168.50.49:3005";

export async function getItems() {
  const r = await fetch(`${url}/items`);
  if (!r.ok) throw new Error("Nem sikerült lekérni az adatokat");
  return r.json();
}

export async function getItemById(id) {
  const r = await fetch(`${url}/items/${id}`);
  if (!r.ok) throw new Error("Nem sikerült elérni az elemet");
  return r.json();
}
