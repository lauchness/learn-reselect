import { combineReducers } from 'redux';
import moviesReducer from './movies/movies.reducer';
import searchReducer from './search/search.reducer';

export default combineReducers({
  movies: moviesReducer,
  search: searchReducer
});
