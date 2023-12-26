import React, { Component } from 'react'

export default class Student1 extends Component {
  render() {
    const { name, address, scores } = this.props; 
    return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>
      <p>Scores: {scores}</p>
    </div> 
    )
  }
}
