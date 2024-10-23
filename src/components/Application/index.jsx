import { useEffect, useState } from "react";
import axios from "axios";
import { CardCharacter } from "../CardCharacters";
import { ContainerApp, ContentCharacters, HeaderApp } from "./style";

export function Application() {
  const [characters, setCharacters] = useState([]);
  const [visibleCharacters, setVisibleCharacters] = useState(12); // Mostrar 12 cards inicialmente
  const [page, setPage] = useState(1); // Controlar a página atual
  const [isLoading, setIsLoading] = useState(false); // Para evitar múltiplos cliques rápidos no botão

  useEffect(() => {
    loadCharacters(page);
  }, [page]);

  const loadCharacters = (page) => {
    setIsLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...response.data.results,
        ]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1); // Aumentar a página a cada clique no botão
    setVisibleCharacters((prevVisible) => prevVisible + 12); // Incrementa o número de personagens visíveis
  };

  return (
    <ContainerApp>
      <HeaderApp>
        <h1>Rick and Morty</h1>
        <span>Total Characters: {characters.length}</span>
      </HeaderApp>
      <ContentCharacters>
        <div>
          {characters.slice(0, visibleCharacters).map((character, index) => (
            <CardCharacter
              key={index}
              image={character.image}
              name={character.name}
              genre={character.gender}
              specie={character.species}
            />
          ))}
        </div>
        <button onClick={handleShowMore} disabled={isLoading}>
          {isLoading ? "Loading..." : "Show More Characters"}
        </button>
      </ContentCharacters>
    </ContainerApp>
  );
}
