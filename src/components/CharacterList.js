// import React from "react";
// import styled from "styled-components";

// const CharacterListContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 10px;
// `;

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-radius: 18px;
//   background: #7f00ff;
//   width: 100%;
//   max-width: 350px;
// `;

// const Image = styled.img`
//   border-radius: 18px 18px 0 0;
//   width: 100%;
// `;

// const Name = styled.h3`
//   font-size: 20px;
//   color: #fff;
// `;

// const Text = styled.p`
//   font-size: 16px;
//   color: #fff;
// `;

// export const CharacterList = ({ characters }) => {
//   return (
//     <CharacterListContainer>
//       {characters.map((character) => (
//         <Card key={character.id}>
//           <Image src={character.image} alt={character.name} />
//           <Name>{character.name}</Name>
//           <Text>Género: {character.gender}</Text>
//           <Text>Estado: {character.status}</Text>
//           <Text>Tipo: {character.species}</Text>
//         </Card>
//       ))}
//     </CharacterListContainer>
//   );
// };
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
  border-radius: 18px;
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
            