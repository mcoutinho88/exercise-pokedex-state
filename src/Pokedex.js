import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

import data from './data';

export class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      type: 'Electric',
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(type) {
    this.setState((state) => ({
      type
    }))
  }

  render() {
    return (
      <>
        <h1 className="title">Pokedex</h1>
        <div className="pokemon-container">
          {data
            .filter((poke) => poke.type === this.state.type)
            .map((pokemon, index) => (
              <Pokemon data={pokemon} key={pokemon.id} />
            ))}
        </div>
        <div className="buttons">
          <button onClick={() => this.handleClick('Electric')}>Electric</button> 
          <button onClick={() => this.handleClick('Fire')}>Fire</button> 
          <button onClick={() => this.handleClick('Bug')}>Bug</button> 
          <button onClick={() => this.handleClick('Poison')}>Poison</button> 
          <button onClick={() => this.handleClick('Psychic')}>Psychic</button> 
          <button onClick={() => this.handleClick('Normal')}>Normal</button> 
          <button onClick={() => this.handleClick('Dragon')}>Dragon</button> 
        </div>
      </>
    );
  }
}

export default Pokedex;
