import React from 'react';
import "./ProfilePage.css";
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";
import { useHistory } from 'react-router-dom';


const ProfilePage = () => {

    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/signup')
      };

    return (
        <div className="Profile-page-container">
            <div>logged in as {sessionUser.email}</div>
            <button className="logout-btn" onClick={(e) => logout(e)}>Logout</button>
        </div>
    )
}

export default ProfilePage;
