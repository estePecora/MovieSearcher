import { GET_MOVIES, MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from '../actions'

const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: []
};

export function rootReducer (state = initialState, action) {

    switch (action.type) {
        case GET_MOVIES:
            return{
                ...state,
                moviesLoaded: action.payload.Search
            }
         case ADD_MOVIE_FAVORITE:
            return{
                ...state,
                moviesFavorites: state.moviesFavorites.concat(action.payload)
            }
        case REMOVE_MOVIE_FAVORITE:
            return{
                ...state,
                moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.payload)
            }
        case MOVIE_DETAIL:
                return{
                    ...state,
                    movieDetail: action.payload
                }
        default:
            return state;
    };

};

export default rootReducer;