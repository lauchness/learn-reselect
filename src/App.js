import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import { getSearch } from './store/search/search.selector';
import MoviesList from './components/MoviesList';
import {
  selectMoviesState
} from './store/movies/movies.selector';
import {fetchMovies} from "./store/movies/movies.thunk";
import { searchMoviesByTerm } from "./store/search/search.thunk";

function App() {
  const dispatch = useDispatch();
  const search = useSelector(getSearch);
  const {
    searchMovies,
    dramas,
    comedies,
    italianMovies,
    isLoading,
  } = useSelector(selectMoviesState);

  const onChange = (event) => {
    if (!event) {
      return;
    }
    dispatch(searchMoviesByTerm(event.target.value));
  };

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch]);

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
      {isLoading && <div>loading...</div>}
      {!isLoading && (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
