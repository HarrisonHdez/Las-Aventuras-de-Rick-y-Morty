import React from "react";
import styled from "styled-components";

const CharacterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 18px;
  background: #7f00ff;
  width: 100%;
  max-width: 200px;
`;

const Image = styled.img`
  border-radius: 18px 18px 0 0;
  width: 100%;
  cursor: pointer;
`;
const Name = styled.h3`
  font-size: 20px;
  color: #fff;
`;

const Text = styled.p`
  font-size: 16px;
  color: #fff;
`;
/**
 * Componente que muestra una lista de personajes.
 * @component
 *
 * @param {Object[]} characters - La lista de personajes a mostrar.
 * @param {Function} onImageClick - Función que se llama cuando se hace clic en una imagen.
 */
export const CharacterList = ({ characters, onImageClick }) => {
  return (
    <CharacterListContainer>
      {characters.map((character) => (
        <Card key={character.id}>
          <Image
            src={character.image}
            alt={character.name}
            onClick={() => onImageClick(character)} 
          />
          <Name>{character.name}</Name>
            <Text>Género: {character.gender}</Text>
            <Text>Estado: {character.status}</Text>
            <Text>Tipo: {character.species}</Text>
        </Card>
      ))}
    </CharacterListContainer>
  );
};
            