export const getMoviesListState = (state) => state.movies.list;
export const getMoviesLoadingState = (state) => state.movies.isLoading;

export const getSearchMovies = (state) =>
  state.search &&
  state.movies.list.filter(
    (movie) => movie.title && movie.title.match(new RegExp(state.search, 'gi'))
  );

export const getDramas = (state) =>
  state.movies.list.filter(
    (movie) => movie.genres && movie.genres.includes('Drama')
  );

export const getComedies = (state) =>
  state.movies.list.filter(
    (movie) => movie.genres && movie.genres.includes('Comedy')
  );

export const getItalianMovies = (state) =>
  state.movies.list.filter(
    (movie) => movie.countries && movie.countries.includes('Italy')
  );
