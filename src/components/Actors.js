import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const mappedActors = actors.map(actor => {
    return (
    <div>
      <h2>Name: {actor.name}</h2>
      <p>Movies:
        <ul>
          {actor.movies.map(movie=><li>{movie}</li>)}
        </ul>
      </p>
    </div>
    )
  })
  return (
    <div>
        <h1>Actors Page</h1>
        {mappedActors}
    </div>
  );
};

export default Actors;
