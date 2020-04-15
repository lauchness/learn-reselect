import {searchSetTerm, searchSetTermSuccessful} from "./search.actions";

export const searchMoviesByTerm = term => dispatch => {
    dispatch(searchSetTerm())

    /**  fetch movies by term
    dispatch(loadMoviesSuccessful(movies))
     */

    dispatch(searchSetTermSuccessful(term))
}
