import {MoviesAction} from "./movies.actions";

const initialMoviesState = {
  isLoading: false,
  list: []
}

const movies = (state = initialMoviesState, action) => {
  switch (action.type) {
    case MoviesAction.LOAD_MOVIES:
      return {
        ...state,
        isLoading: true
      }
    case MoviesAction.LOAD_MOVIES_SUCCESSFUL:
      return {
        ...state,
        list: action.movies,
        isLoading: false
      }
    default:
      return state;
  }
};

export default movies;
