import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import DemoAccount from "../DemoAccount/index"
import "./Navigation.css";
import SearchBar from "./SearchBar";


function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <nav className="nav-bar">
      <ul>
        <li className="home">
          <NavLink exact to="/">
            <img className="airbnb-logo-main" src={"../favicon.svg"} alt="" />
          </NavLink>
        </li>

        <li>
          <SearchBar />
        </li>

        <ul className="become-host">
          <li>
            <NavLink
              exact
              to="/become-a-host"
              style={{ textDecoration: "none" }}
            >
              <div>Become a Host</div>
            </NavLink>
          </li>
          <li className="login-logout">
            {sessionUser ? null : <DemoAccount />}
            {isLoaded && sessionLinks}
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navigation;
