import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link, useParams } from 'react-router-dom';
import './index.css';
import ProfilePage from './ProfilePage';
import PlacesPage from './PlacesPage';
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsListTask } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const AccountPage = () => {

    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [selectedPage,setSelectedPage] = useState(null)

    if (!sessionUser)  {
        history.push('/signup')
    }

    const {subpage} = useParams();

    useEffect(() => {
        if (subpage === 'bookings') {
            setSelectedPage('bookings')
        }
        if (subpage === 'accommodations') {
            setSelectedPage('accommodations')
        }
        if (subpage === undefined) {
            setSelectedPage('profile')
        }
    },[subpage])



    return (
      <div>
        <nav className="accountpage-nav">
          <Link
            className={
              selectedPage === "profile"
                ? "selected-page-active"
                : "accountpage-link"
            }
            to={"/account/"}
          >
            <AiOutlineUser className="category-icon" />
            My profile
          </Link>
          <Link
            className={
              selectedPage === "bookings"
                ? "selected-page-active"
                : "accountpage-link"
            }
            to={"/account/bookings"}
          >
            <BsListTask className="category-icon" />
            My bookings
          </Link>
          <Link
            className={
              selectedPage === "accommodations"
                ? "selected-page-active"
                : "accountpage-link"
            }
            to={"/account/accommodations"}
          >
            <HiOutlineHomeModern className="category-icon" />
            My accommodations
          </Link>
        </nav>
        {selectedPage === "profile" && <ProfilePage />}
        {selectedPage === "accommodations" && <PlacesPage />}
      </div>
    );
}



export default AccountPage;
