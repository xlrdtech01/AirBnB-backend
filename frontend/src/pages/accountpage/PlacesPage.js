import "./PlacesPage.css";
import React, {useState} from "react";
import {Link, useParams} from "react-router-dom"
import { BsPlusLg, BsUpload } from "react-icons/bs";
import Perks from "./perks";
import axios from 'axios';

// Use environment variable for API URL
const API_URL = import.meta.env.VITE_API_URL;

const PlacesPage = () => {

    const {action} = useParams();
    const [title,setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    const [selected, setSelected] = useState([])

    const onChange = () => {

    }


    const addPhotoByLink = async (ev) => {
      ev.preventDefault();
      const {data} = await axios.post(`${API_URL}/api/images/upload-photo-by-link`, {link: photoLink})
      setPhotoLink('');
      setAddedPhotos([...addedPhotos, data.url])
    }

    const uploadPhoto = async (ev) => {
      ev.preventDefault();
      const files = ev.target.files;
      const data = new FormData();
      for(let i=0; i < files.length; i++){
      data.append('photos', files[i]);
      }
      axios.post(`${API_URL}/upload-photo/`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(response => {
        const {data:filename} = response;
        setAddedPhotos([...addedPhotos, filename])
      })

    }


    return (
      <div className="places-page-container">
        <div className="places-page">
          <Link className="add-new-place" to={"/account/accommodations/new"}>
            <BsPlusLg className="plus-new-places" />
            Add a new place
          </Link>
        </div>
        <div>my places</div>
        {action === "new" && (
          <div className="place-creation-container">
            <form className="place-creation-form">
              <h2 className="form-titles">Title</h2>
              <p className="helper-text">
                Title for your place. Should be short and catchy.
              </p>
              <input
                className="input-place-creation"
                type="text"
                placeholder="title, for example: My lovely apt"
                value={title}
                onChange={ev => setTitle(ev.target.value)}
              />
              <h2 className="form-titles">Address</h2>
              <p className="helper-text">Address to this place.</p>
              <input
                type="text"
                className="input-place-creation"
                placeholder="address"
                value={address}
                onChange={ev=> setAddress(ev.target.value)}
              />
              <h2 className="form-titles">Photos</h2>
              <p className="helper-text">more = better</p>
              <div className="url-photo-upload">
                <input
                  className="input-place-creation"
                  type="text"
                  placeholder={"Add using a link .....jpg"}
                  value={photoLink}
                  onChange={ev => setPhotoLink(ev.target.value)}
                />
                <button onClick={ev => addPhotoByLink(ev)} className="add-url-photo-btn">Add photo</button>
              </div>
              <div className="all-photos-container">
                {addedPhotos.length > 0 && addedPhotos.map((photo, idx) => (
                  <div key={idx}>
                    <img src={photo} className="preview-image-added" alt="uploaded photo" />
                  </div>
                ))}
                <label className="add-photos-btn">
                  <input type="file" multiple className="upload-photo-input" />
                  <BsUpload className="add-photos-btn-plus" />
                  <div>Upload</div>
                </label>
              </div>
              <h2 className="form-titles">Description</h2>
              <p className="helper-text">description of the place.</p>
              <textarea
                type="text"
                className="input-place-creation"
                placeholder="address"
                value={description}
                onChange={ev => setDescription(ev.target.value)}
              />
              <h2 className="form-titles">Perks</h2>
              <p className="helper-text">select all the perks of your place.</p>
              <Perks  selected={selected} onChange={onChange}/>
              <h2 className="form-titles">Extra info</h2>
              <p className="helper-text">house rules, etc</p>
              <textarea type="text" className="input-place-creation" value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)}/>
              <h2 className="form-titles">Check in&out times</h2>
              <p className="helper-text">
                add check in and out times, remember to have some time window
                for cleaning the room after guests
              </p>
              <div className="checkin-container">
                <div>
                  <h3 className="checkin-header">Check in time</h3>
                  <input type="text" placeholder="14:00" value={checkIn} onChange={ev => setCheckIn(ev.target.value)}></input>
                </div>
                <div>
                  <h3 className="checkin-header">Check out time</h3>
                  <input type="text" value={checkOut} onChange={ev => setCheckOut(ev.target.value)}></input>
                </div>
                <div className="checkin-header">
                  <h3 className="checkin-header">number of guests</h3>
                  <input type="text" value={maxGuests} onChange={ev => setMaxGuests(ev.target.value)}></input>
                </div>
              </div>
              <div className="save-place-btn-con">
                <button className="save-place-btn">Save</button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
}


export default PlacesPage;
