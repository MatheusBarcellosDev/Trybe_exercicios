import React, { Component } from "react";
import pokemons from "../../data";

import { Container } from "./styles";

class Pokemon extends Component {
  render() {
    return pokemons.map((pokemon) => {
      return (
        <Container className="pokemon" key={pokemon.id}>
          <div>
            <h2>{pokemon.name}</h2>
            <p>{pokemon.type}</p>
            <p>
              {pokemon.averageWeight.value}{" "}
              {pokemon.averageWeight.measurementUnit}
            </p>
          </div>

          <img src={pokemon.image} alt={pokemon.name} />
        </Container>
      );
    });
  }
}
export default Pokemon;
