const SEARCH_SET_TERM = 'SEARCH_SET_TERM';

const searchSetTerm = term => ({
  type: SEARCH_SET_TERM,
  payload: {
    term
  }
});

export { SEARCH_SET_TERM, searchSetTerm };
