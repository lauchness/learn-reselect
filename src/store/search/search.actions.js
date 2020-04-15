
export const SearchAction = {
  SET_TERM: 'SEARCH_SET_TERM',
  SET_TERM_SUCCESSFUL: 'SEARCH_SET_TERM_SUCCESSFUL'
}

export const searchSetTerm = () => ({
  type: SearchAction.SET_TERM
});

export const searchSetTermSuccessful = term => ({
  type: SearchAction.SET_TERM_SUCCESSFUL,
  term
});
