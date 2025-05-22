import { useEffect, useState } from "react";
import { deleteSpot, loadListings } from "../../store/listings";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadReviews } from "../../store/reviews";
import Reviews from "./Reviews";
import "./SpotPage.css";
import { loadListing } from "../../store/listings";
import AddReview from "./AddReview";
import EditSpotFormModal from "../EditSpotModal/index";
import Booking from "../Booking/index";

//TODO: how do I persist react store after a refresh? I get odd behavior if I refresh after going to a page

const SpotPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { spotId } = useParams();
  //  dispatch(loadListing(spotId));
  const spot = useSelector((state) =>
    state.listings.find((spot) => String(spot.id) === spotId)
  );
  //const userId = useSelector((state) => state.session.user.id);
  const [editPage, setEditPage] = useState(false);
  const [hasReview, setHasReview] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  let reviews = useSelector((state) => state.reviews);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [previewimage, setPreviewImage] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [totalReviews, setTotalReviews] = useState(0);

  // const updateAddress = (e) => setAddress(e.target.value);
  // const updateCity = (e) => setCity(e.target.value);
  // const updateState = (e) => setState(e.target.value);
  // const updateCountry = (e) => setCountry(e.target.value);
  // const updateLat = (e) => setLat(e.target.value);
  // const updateLng = (e) => setLng(e.target.value);
  // const updateName = (e) => setName(e.target.value);
  // const updateDescription = (e) => setDescription(e.target.value);
  // const updatePrice = (e) => setPrice(e.target.value);


  const handleReviewUpdate = () => {
    setHasReview(true);
  };

  useEffect(() => {
    if (spot) {
      setAddress(spot.address);
      setCity(spot.city);
      setState(spot.state);
      setCountry(spot.country);
      setLat(spot.lat);
      setLng(spot.lng);
      setName(spot.name);
      setDescription(spot.description);
      setPrice(spot.price);
      setPreviewImage(spot.previewImage);
    }
  }, [editPage]);


  // need
  useEffect(() => {
    dispatch(loadReviews(spotId));
    dispatch(loadListings());
    dispatch(loadListing(spotId));
  }, [dispatch, spotId]);


  //need
  useEffect(() => {
    setHasReview(false);
    setTotalReviews(0);
    if (reviews[0] !== undefined) {
      reviews.forEach((review) => {
        setTotalReviews((prev) => prev + 1);
        if (sessionUser) {
          if (review.userId === sessionUser.id) {
            handleReviewUpdate();
          }
        }
      });
    }
  }, [sessionUser, reviews]);

  if (!sessionUser) return <Redirect to="/signup" />;

  const handleOnClick = (e) => {
    e.preventDefault();
     if(window.confirm("Do you want to delete this review?")){
    dispatch(deleteSpot(spot.id));
    dispatch(loadListings())
    history.push("/");
     }

  };

  const handleEditButton = (e) => {
    e.preventDefault();
    setEditPage(true);
  };



  return (
    <>
      {spot && (
        <div className="page-container">
          {hasSubmitted && validationErrors.length > 0 && editPage === true && (
            <div>
              The following errors were found:
              <ul>
                {validationErrors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="owner-buttons">
            {sessionUser.id === spot.ownerId && editPage === false && (
              <div>
                <EditSpotFormModal />
              </div>
            )}
            {sessionUser.id === spot.ownerId && (
              <div>
                <button
                  className="delete-btn"
                  onClick={(e) => handleOnClick(e)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>

          <h1 className="name-title"> {spot.name}</h1>
          <i className="fa-solid fa-star"></i>
          <span className="avg-stars">{spot.avgStarRating}</span>
          <span className="seperation"> . </span>
          <span className="total-reviews">{totalReviews} reviews</span>
          <span className="seperation"> . </span>
          <span className="address-line">
            {spot.address}, {spot.city}, {spot.state} , {spot.country}
          </span>

          <img src={`${spot.previewImage}`} alt="" className="preview-image" />

          <div className="owner-heading">
            <div className="owner-info">
              <h1 className="heading-for-owner">
                Entire house hosted by{" "}
                {spot.Owner ? `${spot.Owner.firstName}` : "john"}
              </h1>
              <img
                className="default-profile-headshot"
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                alt=""
              />
            </div>
            <div className="house-info">
              <span>6 guest</span>
              <span className="seperation"> . </span>
              <span> 3 bedrooms</span>
              <span className="seperation"> . </span>
              <span> 3 beds </span>
              <span className="seperation"> . </span>
              <span> 2 baths </span>
            </div>
          </div>
          <Booking spot={spot} totalReviews={totalReviews} />
          <div>
            <div className="review-stats-container">
              <div className="review-heading">
                <i className="fa-solid fa-star"></i>
                <span className="avg-stars-stats">{spot.avgStarRating}</span>
                <span className="seperation-stats"> . </span>
                <span className="total-reviews-stats">
                  {totalReviews} reviews
                </span>
                <div className="stats">
                  <div className="left-side-stats">
                    <div className="Cleanliness">
                      <div className="name">
                        <span>Cleanliness</span>
                      </div>
                      <div className="rating-block">
                        <span className="block"></span>
                        <span className="rating">5.0</span>
                      </div>
                    </div>

                    <div className="Communication">
                      <div className="name">
                        <span>Communication</span>
                      </div>
                      <div className="rating-block">
                        <span className="block"></span>
                        <span className="rating">5.0</span>
                      </div>
                    </div>

                    <div className="Check-in">
                      <div className="name">
                        <span>Check-in</span>
                      </div>
                      <div className="rating-block">
                        <span className="block"></span>
                        <span className="rating">5.0</span>
                      </div>
                    </div>
                  </div>

                  <div className="right-side-stats">
                    <div className="Accuracy">
                      <div className="name">
                        <span>Accuracy</span>
                      </div>
                      <div className="rating-block">
                        <span className="block"></span>
                        <span className="rating">5.0</span>
                      </div>
                    </div>

                    <div className="Location">
                      <div className="name">
                        <span>Location</span>
                      </div>
                      <div className="rating-block">
                        <span className="block"></span>
                        <span className="rating">5.0</span>
                      </div>
                    </div>

                    <div className="Value">
                      <div className="name">
                        <span>Value</span>
                      </div>
                      <div className="rating-block">
                        <span className="block"></span>
                        <span className="rating">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {!hasReview && sessionUser ? (
              // <AddReviewModal reviews={reviews} userId={sessionUser.id} />
              <div className="add-review-container">
                <div className="review-form-title">Write a review</div>
                <AddReview />
              </div>
            ) : null}
          </div>
          <div className="all-reviews-container">
            {reviews[0] !== undefined ? (
              <div>
                <Reviews reviews={reviews} userId={sessionUser.id} />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default SpotPage;
