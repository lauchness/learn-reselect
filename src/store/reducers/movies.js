import initialMovies from '../../data/movies.json';

const movies = (state = initialMovies.slice(50), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default movies;
