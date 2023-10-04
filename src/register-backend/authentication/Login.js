import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      setError("Failed to log in: " + error.message);
    }

    setLoading(false);
  }

  return (
    <div className="page-container">
      <div className="signup-container">
        <h2 className="signup-header">Log In</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
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
          <button
            disabled={loading}
            className={`btn btn-primary btn-block signup-button`}
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="w-100 text-center mt-2 login-link">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
