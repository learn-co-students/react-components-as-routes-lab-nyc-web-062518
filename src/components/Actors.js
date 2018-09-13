import React from 'react'
import { actors } from '../data'

const Actors = () => {

  let actorsDivs = actors.map(actor => {
    return (
      <div>
        {actor.name}
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })


  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDivs}
    </div>
  )
}

export default Actors
