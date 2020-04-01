import React from 'react';
import Film from '../Film';
import './Movie.css';

const Movie = props => {
  const { movie } = props;

  return (
    <li className="movie__card">
      <h3>{movie.title}</h3>
      <Film />
      <p>{movie.year}</p>
    </li>
  );
};

export default Movie;
