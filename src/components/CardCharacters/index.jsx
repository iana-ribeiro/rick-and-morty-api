import PropTypes from "prop-types"; // Importar PropTypes
import { ContainerCard } from "./style";

export function CardCharacter({ image, name, genre, specie }) {
  return (
    <ContainerCard>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <ul>
          <li>Genre: {genre}</li>
          <li>Specie: {specie}</li>
        </ul>
      </div>
    </ContainerCard>
  );
}

// Definindo PropTypes
CardCharacter.propTypes = {
  image: PropTypes.string.isRequired, // A imagem é obrigatória e deve ser uma string
  name: PropTypes.string.isRequired, // O nome é obrigatório e deve ser uma string
  genre: PropTypes.string.isRequired, // O gênero é obrigatório e deve ser uma string
  specie: PropTypes.string.isRequired, // A espécie é obrigatória e deve ser uma string
};
