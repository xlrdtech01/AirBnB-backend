import React from 'react'
import Calendar from './Calendar'
import "./index.css"
import { AiFillStar } from "react-icons/ai";

const Booking = ({spot, totalReviews}) => {



    return (
      <div className="booking-container">
        <div className="spot-info-container">
          <div className="booking-heading">
            <div className="spot-price">
              $300<span> night</span>
            </div>
            <div className="spot-rating">
              <AiFillStar /> {spot?.avgStarRating}
            </div>

            <div className="spot-reviews">{totalReviews} reviews</div>
          </div>
          <div className="booking-date-picker-container">
            <Calendar />
          </div>
          <button className="reserve-btn">Reserve</button>
          <div>You won't be charged yet</div>
          <div className="booking-cost-nightly"></div>
          <div className="bookinig-service-cost"></div>
          <div className="booking-total-cost"></div>
        </div>
      </div>
    );
}


export default Booking
