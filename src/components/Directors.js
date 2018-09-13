import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let directorsDivs = directors.map(director => {
    return (
      <div>
        {director.name}
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })



  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDivs}
    </div>
  );
}

export default Directors
