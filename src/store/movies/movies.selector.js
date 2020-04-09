import { createSelector } from 'reselect';
import { getSearch } from '../search/search.selector';

export const getMoviesListState = (state) => state.movies.list;
export const getMoviesLoadingState = (state) => state.movies.isLoading;

const filterMoviesBySearch = (movies, search) => {
  if (!search) {
    return [];
  }
  return movies.filter(
    (movie) => movie.title && movie.title.match(new RegExp(search, 'gi'))
  );
};

export const selectSearchMovies = createSelector(
  getMoviesListState,
  getSearch,
  filterMoviesBySearch
);

const selectByGenre = genre => movies => movies.filter((movie) => movie.genres && movie.genres.includes(genre))

const selectByCountry = country => movies => movies.filter((movie) => movie.countries && movie.countries.includes(country))

export const selectDramas = createSelector(
  getMoviesListState, 
  selectByGenre('Drama')
);

export const selectComedies = createSelector(
  getMoviesListState, 
  selectByGenre('Comedy')
);

export const selectItalianMovies = createSelector(
  getMoviesListState, 
  selectByCountry('Italy')
);

export const selectMoviesState = createSelector(
  getMoviesLoadingState,
  selectSearchMovies,
  selectDramas,
  selectComedies,
  selectItalianMovies,
  (isLoading, searchMovies, dramas, comedies, italianMovies) => ({
    isLoading,
    searchMovies,
    dramas,
    comedies,
    italianMovies
  })
)
