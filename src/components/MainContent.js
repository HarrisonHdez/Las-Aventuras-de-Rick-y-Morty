import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../api/api";
import { CharacterList } from "./CharacterList";
import { Pagination } from "./Pagination";
import DataVisualization from "./DataVisualization";

/**
 * Componente principal que muestra la lista de personajes, paginación y visualización de datos.
 * @component
 */
export const MainContent = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalCharacters = 10 * 9;
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    /**
     * Función asincrónica para obtener datos de personajes y actualizar el estado.
     */
    const fetchData = async () => {
      const data = await fetchCharacters(currentPage);
      setCharacters(data);
    };

    fetchData();
  }, [currentPage]);

  /**
   * Manejar el cambio de página.
   * @param {number} page - Número de página seleccionada.
   */
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalCharacters / 9);

  /**
   * Manejar el clic en la imagen de un personaje para mostrar detalles.
   * @param {Object} character - El personaje seleccionado.
   */
  const handleImageClick = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <main className="main">
      <div className="main__content container">
        <div>
          <CharacterList
            characters={characters}
            onImageClick={handleImageClick}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

        <div className="main__info">
          {selectedCharacter && (
            <div className="main__character">
              <img
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
              />
              <div className="main__characters">
                <p>ID: {selectedCharacter.id}</p>
                <p>Nombre: {selectedCharacter.name}</p>
                <p>Estado: {selectedCharacter.status}</p>
                <p>Especie: {selectedCharacter.species}</p>
                <p>Tipo: {selectedCharacter.type}</p>
                <p>Género: {selectedCharacter.gender}</p>
                <p>Origen: {selectedCharacter.origin.name}</p>
                <p>Ubicación: {selectedCharacter.location.name}</p>
                <p>Episodios: {selectedCharacter.episode.length}</p>
                <p>Fecha de creación: {selectedCharacter.created}</p>
              </div>
            </div>
          )}

          <div>
            <DataVisualization characters={characters} />
          </div>
        </div>
      </div>
    </main>
  );
};
