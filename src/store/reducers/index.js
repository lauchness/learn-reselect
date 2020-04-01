import { combineReducers } from 'redux';
import movies from './movies';
import search from './search';

export default combineReducers({
  movies,
  search
});
