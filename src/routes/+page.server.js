// +page.server.js
export async function load() {
  try {
    const response = await fetch('https://fdnd.directus.app/items/person/');
    if (!response.ok) throw new Error('Failed to fetch data');

    const data = await response.json();
    const specificId = 84; // fetch data for ID 84

    const person = data.data.find(person => person.id === specificId);
    console.log('Fetched person data:', person); // Logged fetched data

    return {
      person: person || null
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      person: null,
      error: error.message
    };
  }
}
