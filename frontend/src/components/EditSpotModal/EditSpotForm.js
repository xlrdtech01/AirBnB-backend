import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams} from "react-router-dom";
import { updateSpot } from "../../store/listings"
import "./EditSpotForm.css"

const EditSpotForm = ({ closeModal }) => {

  const dispatch = useDispatch();
  const { spotId } = useParams();
  const spot = useSelector((state) =>
    state.listings.find((spot) => String(spot.id) === spotId)
  );

  const sessionUser = useSelector((state) => state.session.user);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [addressErr, setAddressErr] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [stateErr, setStateErr] = useState(false);
  const [countryErr, setCountryErr] = useState(false);
  const [latErr, setLatErr] = useState(false);
  const [lngErr, setLngErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [descriptionErr, setDescriptionErr] = useState(false);
  const [priceErr, setPriceErr] = useState(false);
  const [previewImageErr, setPreviewImageErr] = useState(false);

  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateLat = (e) => setLat(e.target.value);
  const updateLng = (e) => setLng(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updatePreviewImage = (e) => setPreviewImage(e.target.value);


  // sets the useState to current values
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
  }, [spot]);

  //error checking useEffect
  useEffect(() => {
    const errors = [];
    setAddressErr(false);
    setCityErr(false);
    setStateErr(false);
    setCountryErr(false);
    setLatErr(false);
    setLngErr(false);
    setNameErr(false);
    setDescriptionErr(false);
    setPriceErr(false);
    setPreviewImageErr(false);

    if (address.length > 20) {
      setAddressErr(true);
      errors.push("address must be less than 20 characters long");
    }
    if (city.length > 20) {
      setCityErr(true);
      errors.push("city must be less than 20 characters long");
    }
    if (state.length > 20) {
      setStateErr(true);
      errors.push("state must be less than 20 characters long");
    }
    if (country.length > 40) {
      setCountryErr(true);
      errors.push("state must be less than 40 characters long");
    }
    if (isNaN(lat)) {
      setLatErr(true);
      errors.push("lat must be a number");
    }
    if (isNaN(lng)) {
      setLngErr(true);
      errors.push("lng must be a number");
    }
    if (name.length > 50) {
      setNameErr(true);
      errors.push("name must be less than 50 characters");
    }
    if (name.description > 250) {
      setDescriptionErr(true);
      errors.push("description must be less than 250 characters");
    }
    if (isNaN(price)) {
      setPriceErr(true);
      errors.push("price must be a number");
    }
    setValidationErrors(errors);
  }, [address, city, state, country, lat, lng, name, description, price]);

  if (!sessionUser) return <Redirect to="/signup" />;

  const handleSaveButton = (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (validationErrors.length) return alert("cannot submit");

    const updatedSpot = {
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
    };
    const updatedSpotDispatch = dispatch(updateSpot(updatedSpot, spot.id));

    if(updatedSpotDispatch){
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

    closeModal();
  };

  const handleCancelButton = (e) => {
    e.preventDefault();
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
    closeModal();
  };

  return (
    <div className="edit-spot-form-container">
      <form className="edit-spot-form">
        <img
          className="full-logo-edit"
          src="https://cdn.iconscout.com/icon/free/png-256/airbnb-2-282311.png"
          alt="some-logo"
        />
        <label>
          Street Address
          <input
            type="text"
            placeholder="Address"
            required
            value={address}
            onChange={updateAddress}
          />
        </label>
        {hasSubmitted && addressErr && (
          <span className="error-text">Maximum address length is 20</span>
        )}
        <label>
          City
          <input
            type="text"
            placeholder="City"
            required
            value={city}
            onChange={updateCity}
          />
        </label>
        {hasSubmitted && cityErr && (
          <span className="error-text">Maximum city length is 20</span>
        )}
        <label>
          State
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={updateState}
          />
        </label>
        {hasSubmitted && stateErr && (
          <span className="error-text">Maximum State length is 20</span>
        )}
        <label>
          {" "}
          Country
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={updateCountry}
          />
        </label>
        {hasSubmitted && countryErr && (
          <span className="error-text">Maximum Country length is 40</span>
        )}
        <label>
          {" "}
          Latitude
          <input
            type="text"
            placeholder="lat"
            value={lat}
            onChange={updateLat}
          />
        </label>
        {hasSubmitted && latErr && (
          <span className="error-text">Latitutde must be a number</span>
        )}

        <label>
          Longitude
          <input
            type="text"
            placeholder="lng"
            value={lng}
            onChange={updateLng}
          />
        </label>
        {hasSubmitted && lngErr && (
          <span className="error-text">Longitude must be a number</span>
        )}
        <label>
          Name
          <textarea
            maxLength="50"
            className="name-textarea"
            type="text"
            placeholder="name"
            value={name}
            onChange={updateName}
          />
        </label>
        {hasSubmitted && nameErr && (
          <span className="error-text">
            Name must be less than 50 characters
          </span>
        )}
        <label className="description-label">
          description
          <textarea
            maxLength="250"
            className="description-textarea"
            type="text"
            placeholder="description"
            value={description}
            onChange={updateDescription}
          />
        </label>
        {hasSubmitted && descriptionErr && (
          <span className="error-text">
            Description must less than 200 characters
          </span>
        )}
        <label>
          price
          <input
            type="text"
            placeholder="price"
            value={price}
            onChange={updatePrice}
          />
        </label>
        {hasSubmitted && priceErr && (
          <span className="error-text">Price must be a number</span>
        )}
        <label>
          {" "}
          preview image
          <input
            type="text"
            placeholder="preview image"
            value={previewImage}
            onChange={updatePreviewImage}
          />
        </label>
        {hasSubmitted && previewImageErr && (
          <span className="error-text">
            image link must not be more than 100 chars
          </span>
        )}

        <button
          className="update-listing-btn"
          type="submit"
          onClick={(e) => handleSaveButton(e)}
        >
          Update
        </button>
        <button
          className="Cancel-update-listing-btn"
          type="button"
          onClick={(e) => handleCancelButton(e)}
        >
          Cancel
        </button>
      </form>
    </div>
  );




};

export default EditSpotForm;
