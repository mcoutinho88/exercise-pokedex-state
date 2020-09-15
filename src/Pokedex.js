import React, { Component } from 'react';
import Pokemon from './Pokemon';

import data from './data';

export class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      type: 'Electric',
      index: 0,
    };

    this.handleClickByType = this.handleClickByType.bind(this);
    this.handlePokemon = this.handlePokemon.bind(this);
  }

  handleClickByType(type) {
    this.setState((state) => ({
      type,
      index: 0,
    }));
  }

  handlePokemon() {
    const pokemonByType = data.filter((poke) => poke.type === this.state.type);
    if (pokemonByType.length - 1 !== this.state.index) {
      this.setState((state) => ({
        index: state.index + 1,
      }));
    } else {
      this.setState((state) => ({
        index: 0,
      }));
    }
    
  }

  render() {
    const pokemonByType = data.filter((poke) => poke.type === this.state.type);
    const getAllTypes = data.map(pokemon => pokemon.type);
    const uniqueTypes = [...new Set(getAllTypes)];
    console.log(uniqueTypes)
    return (
      <>
        <h1 className="title">Pokedex</h1>
        <div className="pokemon-container">
          {pokemonByType.map((pokemon) => (
            <Pokemon data={pokemon} key={pokemon.id} />
          ))[this.state.index]}
        </div>
        <div className="select-type">
          <button onClick={() => this.handleClickByType('Electric')}>
            Electric
          </button>
          <button onClick={() => this.handleClickByType('Fire')}>Fire</button>
          <button onClick={() => this.handleClickByType('Bug')}>Bug</button>
          <button onClick={() => this.handleClickByType('Poison')}>
            Poison
          </button>
          <button onClick={() => this.handleClickByType('Psychic')}>
            Psychic
          </button>
          <button onClick={() => this.handleClickByType('Normal')}>
            Normal
          </button>
          <button onClick={() => this.handleClickByType('Dragon')}>
            Dragon
          </button>
        </div>
        <div className="next-poke">
          <button onClick={this.handlePokemon}>Next Pokemon</button>
        </div>
      </>
    );
  }
}

export default Pokedex;
