import { SearchAction} from './search.actions';

const initalSearch = {
  isLoading: false,
  term: ''
};

const searchReducer = (state = initalSearch, action) => {
  const { type, payload } = action;
  switch (type) {
    case SearchAction.SET_TERM:
      return {
        ...state,
        isLoading: true
      };
    case SearchAction.SET_TERM_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        term: action.term
      };
    default:
      return state;
  }
};

export default searchReducer;
