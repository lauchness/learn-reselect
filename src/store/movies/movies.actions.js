export const MoviesAction = {
    LOAD_MOVIES: 'MOVIES_LOAD_MOVIES',
    LOAD_MOVIES_SUCCESSFUL: 'MOVIES_LOAD_MOVIES_SUCCESSFUL' ,
    LOAD_MOVIES_ERROR: 'MOVIES_LOAD_MOVIES_ERROR'
};

export const loadMovies = () => ({
    type: MoviesAction.LOAD_MOVIES
});

export const loadMoviesSuccessful = movies => ({
    type: MoviesAction.LOAD_MOVIES_SUCCESSFUL,
    movies
});

export const loadMoviesError = message => ({
    type: MoviesAction.LOAD_MOVIES_ERROR,
    message
});
