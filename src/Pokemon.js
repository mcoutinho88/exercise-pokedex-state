import React, { Component } from 'react'

export class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image, moreInfo } = this.props.data;
    return (
      <div className='container'>
        <div className="details">
          <p>{name}</p>
          <p>{type}</p>
          <p>Average Weight: {value}{measurementUnit}</p>
          <a className='more-info' href={moreInfo}>More Info</a>
        </div>
        <img className='poke-img' src={image} alt={name}/>
      </div>
    )
  }
}

export default Pokemon
