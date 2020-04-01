import { SET_SEARCH_TERM } from './types';

const setSearchTerm = term => ({
  type: SET_SEARCH_TERM,
  payload: {
    term
  }
});

export { setSearchTerm };
