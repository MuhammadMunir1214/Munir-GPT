import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const history = useHistory();

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError("Passwords do not match");
  //   }

  //   try {
  //     setError("");
  //     setLoading(true);
  //     await signup(emailRef.current.value, passwordRef.current.value);
  //     history.push("/");
  //   } catch {
  //     setError("Failed to create an account");
  //   }

  //   setLoading(false);
  // }

  return (
    <div className="page-container">
      <div className="signup-container">
        <h2 className="signup-header">Register</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form>
          <div className="form-group" id="email">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              ref={emailRef}
              required
            />
          </div>
          <div className="form-group" id="password">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              ref={passwordRef}
              required
            />
          </div>
          <div className="form-group" id="password-confirm">
            <label>Password Confirmation</label>
            <input
              type="password"
              className="form-control"
              ref={passwordConfirmRef}
              required
            />
          </div>
          <button
            disabled={loading}
            className={`btn btn-primary btn-block signup-button`}
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="w-100 text-center mt-2 login-link">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}
