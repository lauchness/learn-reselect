import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import MoviesList from './components/MoviesList';
import { searchSetTerm } from './store/search/search.actions';

function App() {
  const dispatch = useDispatch();
  const { searchMovies, search, dramas, comedies, italianMovies } = useSelector(
    state => {
      const searchMovies =
        state.search &&
        state.movies.filter(
          movie =>
            movie.title && movie.title.match(new RegExp(state.search, 'gi'))
        );
      const dramas = state.movies.filter(
        movie => movie.genres && movie.genres.includes('Drama')
      );
      const comedies = state.movies.filter(
        movie => movie.genres && movie.genres.includes('Comedy')
      );
      const italianMovies = state.movies.filter(
        movie => movie.countries && movie.countries.includes('Italy')
      );
      const search = state.search;
      return {
        searchMovies,
        search,
        dramas,
        comedies,
        italianMovies
      };
    }
  );

  const onChange = event => {
    if (!event) {
      return;
    }
    dispatch(searchSetTerm(event.target.value));
  };

  return (
    <div className="app__container">
      <h1>My Movies</h1>
      <hr />
      <label htmlFor="filter">Search for Movies</label>
      <input
        className="movies-list__filter-input"
        id="filter"
        type="text"
        value={search}
        onChange={onChange}
      />
      <MoviesList data={searchMovies} />
      <hr />
      <h2>Drama</h2>
      <MoviesList data={dramas} />
      <hr />
      <h2>Comedies</h2>
      <MoviesList data={comedies} />
      <hr />
      <h2>Italian Films</h2>
      <MoviesList data={italianMovies} />
    </div>
  );
}

export default App;
