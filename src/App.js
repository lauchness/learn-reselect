import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import { getSearch } from './store/search/search.selector';
import MoviesList from './components/MoviesList';
import { searchSetTerm } from './store/search/search.actions';
import {
  loadMovies,
  loadMoviesSuccessful,
} from './store/movies/movies.actions';
import {
  selectMoviesState
} from './store/movies/movies.selector';

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
    dispatch(searchSetTerm(event.target.value));
  };

  useEffect(() => {
    dispatch(loadMovies());
    fetch('./movies.json', {
      mode: 'no-cors',
    })
      .then((res) => res.json())
      .then((movies) => dispatch(loadMoviesSuccessful(movies)));
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
