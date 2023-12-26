import React from 'react'

export default function Student({name, address, scores}) {
  return (
    <div>
    <h2>{name}</h2>
    <p>{address}</p>
    <p>Scores: {scores}</p>
  </div>

  )
}
