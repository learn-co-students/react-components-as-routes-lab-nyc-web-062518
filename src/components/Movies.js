import React from 'react'
import { movies } from '../data'

const Movies = () => {

  let moviesDivs = movies.map(movie => {
    return (
      <div>
        {movie.title} ({movie.time} Minutes)
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
        {moviesDivs}
    </div>
  )
}

export default Movies;
