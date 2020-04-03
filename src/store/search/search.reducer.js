import { SEARCH_SET_TERM } from './search.actions';

const initalSearch = '';

const searchReducer = (state = initalSearch, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_SET_TERM:
      return payload.term;
    default:
      return state;
  }
};

export default searchReducer;
