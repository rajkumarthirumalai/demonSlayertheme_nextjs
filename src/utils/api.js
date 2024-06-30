export async function getCharacters(page = 1, limit = 9) {
    const res = await fetch(`https://demon-slayer-api-9c6c.onrender.com/api/?page=${page}&limit=${limit}`);
    if (!res.ok) throw new Error('Failed to fetch characters');
    return res.json();
  }
  
  export async function getCharacterById(id) {
    const res = await fetch(`https://demon-slayer-api.onrender.com/v1/${id.replace('_', ' ')}`);
    if (!res.ok) throw new Error('Failed to fetch character');
    const data = await res.json();
    return data[0]; // The API returns an array with a single object
  }