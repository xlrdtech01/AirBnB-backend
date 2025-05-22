import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import { createReview } from "../../store/reviews";
import "./AddReview.css"


const AddReview = ({id, cancel,handleSave, curReview, update,curStars}) => {
  const dispatch = useDispatch();

  const { spotId } = useParams();
  const [reviewIsEmpty, setReviewIsEmpty] = useState(true);
  const [stars, setStars] = useState("");
  const [review, setReview] = useState("");
  const [starValue, setStarValue] = useState(1);
  const [validationErrors, setValidationErrors] = useState([])
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const updateReview = (e) => setReview(e.target.value);

  useEffect(()=> {
    if(curReview){
      setReview(curReview);
    }
    if(curStars) {
      setStarValue(curStars)
    }
  },[curReview, curStars])

  useEffect(() => {
    const errors = [];
    if (stars > 5 || stars < 0) {
      errors.push("stars must be between 0 and 5");
    }
    if (review.length > 250) {
      errors.push("Review can be at most 250 characters long");
    }
    if(review.length > 0){
      setReviewIsEmpty(false)
    }
    if(review.length === 0){
      setReviewIsEmpty(true)
    }
    setValidationErrors(errors);
  }, [stars, review]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);
    if (validationErrors.length) return alert("cannot submit");

    const payload = {
      review,
      stars: starValue

    };

    dispatch(createReview(payload, spotId));

    setStarValue(1);
    setStars("");
    setReview("");

  };

  const handleStarClick = (e) => {
    e.preventDefault()
    setStarValue(e.target.value)

  }

  const handleCancelClick = (e) => {
     setStarValue(1);
     setReview("");
    if(curReview){
      cancel(e)
    }
  };

  return (
    <div className="review-container">
      {hasSubmitted && validationErrors.length > 0 && (
        <div>
          The following errors were found:
          <ul>
            {validationErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form className="create-review-form" onSubmit={handleSubmit}>
        <label className="Review-title-for-edit">Review</label>
        <div className="all-stars">
          <div className="star-one">
            <label>
              <input
                type="radio"
                name="star1"
                value={1}
                onClick={(e) => {
                  handleStarClick(e);
                }}
              />
              {starValue >= 1 ? (
                <i className="fa-solid fa-star"></i>
              ) : (
                <i className="fa-regular fa-star"></i>
              )}
            </label>
          </div>
          <div className="star-two">
            <label>
              <input
                type="radio"
                name="star2"
                value={2}
                onClick={(e) => {
                  handleStarClick(e);
                }}
              />
              {starValue >= 2 ? (
                <i className="fa-solid fa-star"></i>
              ) : (
                <i className="fa-regular fa-star"></i>
              )}
            </label>
          </div>
          <div className="star-three">
            <label>
              <input
                type="radio"
                name="star3"
                value={3}
                onClick={(e) => {
                  handleStarClick(e);
                }}
              />
              {starValue >= 3 ? (
                <i className="fa-solid fa-star"></i>
              ) : (
                <i className="fa-regular fa-star"></i>
              )}
            </label>
          </div>
          <div className="star-four">
            <label>
              <input
                type="radio"
                name="star4"
                value={4}
                onClick={(e) => {
                  handleStarClick(e);
                }}
              />
              {starValue >= 4 ? (
                <i className="fa-solid fa-star"></i>
              ) : (
                <i className="fa-regular fa-star"></i>
              )}
            </label>
          </div>
          <div className="star-five">
            <label>
              <input
                type="radio"
                name="star5"
                value={5}
                onClick={(e) => {
                  handleStarClick(e);
                }}
              />
              {starValue >= 5 ? (
                <i className="fa-solid fa-star"></i>
              ) : (
                <i className="fa-regular fa-star"></i>
              )}
            </label>
          </div>
        </div>
        <div className="review-container">
          <textarea
            maxLength="250"
            className="review-textarea-editing"
            id="Review"
            name="Review"
            onChange={(e) => updateReview(e)}
            value={review}
          />
        </div>
        {!update && (
          <button
            className="submit-review-btn"
            type="submit"
            disabled={reviewIsEmpty}
          >
            Submit
          </button>
        )}
        {update && (
          <button
            className="update-review-btn"
            type="update"
            disabled={reviewIsEmpty}
            onClick={(e) => handleSave(e, review, starValue, id)}
          >
            Save
          </button>
        )}
        {update && (
          <button
            className="cancel-update-btn"
            type="cancel"
            onClick={(e) => {
              handleCancelClick(e);
            }}
          >
            cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default AddReview;
