import {loadMovies, loadMoviesError, loadMoviesSuccessful} from "./movies.actions";

export const fetchMovies = () => dispatch =>  {
    dispatch(loadMovies());

    fetch('./movies.json')
        .then((res) => res.json())
        .then((movies) => dispatch(loadMoviesSuccessful(movies)))
        .catch((err) => dispatch(loadMoviesError(err)));
}
