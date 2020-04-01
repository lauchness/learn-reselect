import React from 'react';

import './MoviesList.css';
import Movie from '../Movie';

const MoviesList = ({ data }) => {
  return (
    <div className="movies-list__container">
      <ul className="movies-list__list">
        {data &&
          data.map(movie => {
            return <Movie key={movie._id.$oid} movie={movie} />;
          })}
      </ul>
    </div>
  );
};

export default MoviesList;
