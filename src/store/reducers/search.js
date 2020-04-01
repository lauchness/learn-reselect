import { SET_SEARCH_TERM } from '../actions/types';

const initalSearch = '';

const visibilityFilter = (state = initalSearch, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SEARCH_TERM:
      return payload.term;
    default:
      return state;
  }
};

export default visibilityFilter;
