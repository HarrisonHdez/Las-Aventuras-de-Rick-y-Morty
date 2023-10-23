// api.js
const BASE_URL = 'https://rickandmortyapi.com/api/';

export async function fetchCharacters(page) {
  const resultsPerPage = 9;
  let allCharacters = [];

  for (let i = 1; i <= page; i++) {
    const response = await fetch(`${BASE_URL}character?page=${i}`);
    if (!response.ok) {
      throw new Error('Error fetching characters');
    }
    const data = await response.json();
    allCharacters = allCharacters.concat(data.results);
  }

  // Filtrar solo los primeros 9 personajes de la página actual
  const startIndex = (page - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  return allCharacters.slice(startIndex, endIndex);
}
