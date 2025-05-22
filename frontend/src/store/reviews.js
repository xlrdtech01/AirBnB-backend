import { csrfFetch } from "./csrf";

const LOAD = 'review/loadReviews'
const ADD_ONE = 'review/addOne'
const DELETE_ONE = 'review/deleteOne'
const EDIT = 'review/edit'


const load = (reviews) => ({
    type: LOAD,
    payload: reviews,
})

// const editAReview = (review) => ({
//   type: EDIT,
//   review
// })

const deleteOne = (reviewId) => ({
  type: DELETE_ONE,
  payload: reviewId,
});


export const loadReviews = (spotId) => async (dispatch) => {
      const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
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


export const createReview = (newReview, spotId) => async (dispatch) => {

  // had to add another fetch request to get all review again because theres odd behavior where getallreviews returns addition objects but create doesn't
  const {
    review,
    stars
  } = newReview;

  const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: "POST",
    body: JSON.stringify({
      review,
      stars
    }),
  });

  if(response.ok){
    const newResponse = await csrfFetch(`/api/spots/${spotId}/reviews`, {
          method: "GET",
      });
  const data = await newResponse.json();
  dispatch(load(data));
  }
  return response;
};


export const updateReview = (reviewId, newReview, spotId) => async (dispatch) => {

  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "PUT",
    body: JSON.stringify({
      "review" : newReview.review,
      "stars": newReview.stars
    }),
  });
  // const data = await response.json();
  // dispatch(editAReview(data));
  // I had to do this to force a rerender ask if there is another option
  if (response.ok) {
    const newResponse = await csrfFetch(`/api/spots/${spotId}/reviews`, {
      method: "GET",
    });
    const data = await newResponse.json();
    dispatch(load(data));
  }
  return response;
};


export const deleteReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    // const data = await response.json();
    dispatch(deleteOne(reviewId));
  }
  return response;
};

// to be continued...
// end of day thoughts... should i put redux things into lcoal storage to persist past page refresh

const initialState = []

const reviewReducer = (state = initialState, action) => {

  let newState = [];
  let found;

  switch(action.type){
    case LOAD:
      newState =[...action.payload]
      return newState;
    case DELETE_ONE:
      newState=[...state]
      found = newState.findIndex(
        (element) => element.id === action.reviewId
      );
      newState.splice(found, 1);
      return newState;
    case ADD_ONE:
      newState=[...state]
      newState.push(action.review);
      return newState;
    case EDIT:
      newState=[...state]
      found = newState.findIndex(
         (element) => element.id === action.reviewId
       );
      newState[found] = action.review
      return newState;
    default:
      return state;
  }
}



export default reviewReducer;
