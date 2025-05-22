import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import './LoginForm.css'
import {useHistory, Redirect } from 'react-router-dom'


function LoginForm({closeModal}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const history  = useHistory();

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
        if (data.statusCode === 401) {
          setErrors([data.message])
          setEmail("")
          setPassword("")
        }
      });

  };

  const handleSignUp = (e) => {
    e.preventDefault();
    closeModal();
    history.push('/signup')
  }


  return (
    <div className="login-container">
      <span className="login-title">Login</span>
      <form onSubmit={handleSubmit} className="login-form">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="username-input"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="password-input-field"
        />
        <button type="submit" className="login-btn">
          Log In
        </button>
        <div className="not-a-member">
          Not a member?{" "}
          <span
          className="sign-up-now-btn"
            onClick={(e) => {
              handleSignUp(e);
            }}
          >
            Signup now
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
