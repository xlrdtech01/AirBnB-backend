import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink } from "react-router-dom";
import "./ProfileButton.css"

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="flyout" onClick={openMenu}>
        <i className="fa-sharp fa-solid fa-bars hamburger" />
        <img
          className="default-profile"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt=""
        />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className="messages-button">
            <NavLink
              className="messages-button-nav"
              to="/messages"
              style={{ textDecoration: "none" }}
            >
              Messages
            </NavLink>
          </li>
          <li className="trips-button">
            <NavLink
              className="trips-button-nav"
              to="/trips"
              style={{ textDecoration: "none" }}
            >
              Trips
            </NavLink>
          </li>
          <li className="seperator-line"> </li>
          <li className="manage-listings-button">
            <NavLink
              className="manage-listings-button-nav"
              to="/profile"
              style={{ textDecoration: "none" }}
            >
              Manage listings
            </NavLink>
          </li>
          <li className="host-experience-button">
            <NavLink
              className="host-experience-button-nav"
              to="/profile"
              style={{ textDecoration: "none" }}
            >
              Host an experience
            </NavLink>
          </li>
          <li className="account-button">
            <NavLink
              className="account-button-nav"
              to="/profile"
              style={{ textDecoration: "none" }}
            >
              Account
            </NavLink>
          </li>
          <li className="seperator-line"></li>
          <li className="flyout-logout-btn" onClick={(e) => logout(e)}>
            <button onClick={(e) => logout(e)} className="profile-btn-logout">
              Log out
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
