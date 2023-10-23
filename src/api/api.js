/**
 * Función asincrónica para buscar y recuperar personajes de la API de Rick y Morty.
 *
 * @param {number} page - El número de página de personajes a recuperar.
 * @returns {Promise<Object[]>} - Una promesa que resuelve en un arreglo de personajes.
 * @throws {Error} - Se lanza un error si ocurre un problema al recuperar los personajes.
 */

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

  const startIndex = (page - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  return allCharacters.slice(startIndex, endIndex);
}
