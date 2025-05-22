import { csrfFetch } from "./csrf";

const LOAD = 'favorite/loadFavorites'
const ADD_ONE = 'favorite/addOne'
const DELETE_ONE = 'favorite/deleteOne'


const load = (favorites) => ({
    type: LOAD,
    payload: favorites,
})

const deleteOne = (favoriteId) => ({
    type: DELETE_ONE,
    payload: favoriteId,
});

const addOne = (favorite) => ({
    type: ADD_ONE,
    payload: favorite,
});

export const loadFavorites = () => async (dispatch) => {
    const response = await csrfFetch(`/api/favorites`, {
        method: "GET",
    });

    if(response.ok){
        const data = await response.json();
        if(data){
            dispatch(load(data));
        }
    }
    return response;
}

export const createFavorite = (spotId) => async (dispatch) => {

        const response = await csrfFetch(`/api/favorites`, {
            method: "POST",
            body: JSON.stringify({
                spotId
            }),
        });

        if(response.ok){
            const data = await response.json();
            if(data){
                dispatch(addOne(data));
            }
        }
        return response;
    }

export const deleteFavorite = (favoriteId) => async (dispatch) => {
    const response = await csrfFetch(`/api/favorites/${favoriteId}/`, {
        method: "DELETE",
    });

    if(response.ok){
        const data = await response.json();
        if(data){
            dispatch(deleteOne(data));
        }
    }
    return response;
}

const initialState = {};

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allFavorites = {};
            action.payload.favorites.forEach((favorite) => {
                allFavorites[favorite.spotId] = favorite;
            });
            return {
                ...allFavorites,
                ...state,
            };
        }
        case ADD_ONE: {
            return {
                ...state,
                [action.payload.favorite.spotId]: action.payload.favorite
            }
        }
        case DELETE_ONE: {
            const newState = {...state};
            delete newState[action.payload.favorite.spotId];
            return newState;
        }
        default:
            return state;
    }
}

export default favoriteReducer;
