import { csrfFetch } from "./csrf";

const LOAD = "listing/loadListings";
const ADD_ONE = "spot/addOne";
const DELETE_ONE = "spot/deleteOne";
const EDIT = "spot/edit";
const LOAD_ONE = "listing/loadone";

const load = (spots) => ({
  type: LOAD,
  payload: spots,
});

const addOneSpot = (spot) => ({
  type: ADD_ONE,
  spot,
});

const deleteOne = (spotId) => ({
  type: DELETE_ONE,
  payload: spotId,
});

// const editOne = (spot) => ({
//   type: EDIT,
//   payload: spot,
// });

// const loadOne = (data) => ({
//   type: LOAD_ONE,
//   payload: data,
// });

export const loadListings = () => async (dispatch) => {
  try {
    console.log('Fetching spots from:', import.meta.env.VITE_API_URL + '/api/spots');
    const response = await csrfFetch("/api/spots", {
      method: "GET"
    });
    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Spots data:', data);
    dispatch(load(data.spots));
    return response;
  } catch (error) {
    console.error('Error loading listings:', error);
    throw error;
  }
};

export const createSpot = (spot) => async (dispatch) => {
  const {
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
    previewImage,
  } = spot;

  const response = await csrfFetch("/api/spots/", {
    method: "POST",
    body: JSON.stringify({
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
      previewImage,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addOneSpot(data));
  }
  return response;
};

export const deleteSpot = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    // const data = await response.json();
    dispatch(deleteOne(spotId));
  }

  return response;
};

export const updateSpot = (updatedSpot, spotId) => async (dispatch) => {
  const {
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
    previewimage,
  } = updatedSpot;

  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "PUT",
    body: JSON.stringify({
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
      previewimage,
    }),
  });
  if (response.ok) {
    const response = await csrfFetch("/api/spots", {
      method: "GET",
    });
    const data = await response.json();
    dispatch(load(data.spots));
  }
  return response;
};

export const loadListing = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "GET",
  });
  const data = await response.json();
  dispatch(addOneSpot(data));

  return response;
};

const initialState = [];

const listingsReducer = (state = initialState, action) => {
  let newState;
  let found;
  switch (action.type) {
    case LOAD:
      newState = [...action.payload];
      return newState;
    case ADD_ONE:
      newState = [...state];
      found = newState.findIndex((element) => element.id === action.spot.id);
      if (found > -1) {
        newState[found] = action.spot;
      } else {
        newState.push(action.spot);
      }
      return newState;
    case DELETE_ONE:
      newState = [...state];
      found = newState.findIndex((element) => element.id === action.spotId);
      newState.splice(found, 1);
      return newState;
    case LOAD_ONE:
      newState = [];
      newState.push(action.data);
      return newState;
    case EDIT:
      newState = [...state];
      found = newState.findIndex((element) => element.id === action.spotId);
      newState[found] = action.spot;
      return newState;
    default:
      return state;
  }
};

export default listingsReducer;
