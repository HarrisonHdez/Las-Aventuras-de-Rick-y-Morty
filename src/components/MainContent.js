import { useState, useEffect } from "react";
import { fetchCharacters } from "../api/api";
import { CharacterList } from "./CharacterList";
import { Pagination } from "./Pagination";
import DataVisualization from "./DataVisualization";

export const MainContent = () => {
  // const [characters, setCharacters] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalCharacters = 10 * 9;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchCharacters(currentPage);
  //     setCharacters(data);
  //   };

  //   fetchData();
  // }, [currentPage]);

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  // const totalPages = Math.ceil(totalCharacters / 9);

  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalCharacters = 10 * 9;
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Estado para el personaje seleccionado

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(currentPage);
      setCharacters(data);
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalCharacters / 9);

  // Manejar el clic en la imagen para mostrar características
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
          <div>
            {selectedCharacter && (
              <div>
                <img
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                />
                <div>
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
          </div>

          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            nobis ipsum tenetur non minima dolores fugit? Mollitia quaerat esse
            repellat. Deserunt quasi voluptas ipsa eveniet amet quibusdam
            assumenda fugit corrupti.



            <DataVisualization characters={characters} />
          </div>
        </div>
      </div>
    </main>
  );
};
