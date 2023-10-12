import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useAuth } from "../../register-backend/context/AuthContext";
import logo from "../../assets/Munir-GPT-5.png";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT?</a>
      </p>
      <p>
        <a href="#features">Features</a>
      </p>
      <p>
        <Link to="/openAI" target="_blank">
          Open AI
        </Link>
      </p>
      <p>
        <a
          href="https://munir-pdf.streamlit.app/"
          target="_blank"
          rel="noreferrer"
        >
          PDF Reader
        </a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setToggleMenu(false);
  };

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-welcome-logout">
        {currentUser && (
          <>
            <p className="gpt3__navbar-welcome">Welcome, {currentUser.email}</p>
            <button
              type="button"
              className="gpt3__navbar-signup"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </>
        )}
        {!currentUser && (
          <div>
            <Link to="/login">
              <button type="button" className="gpt3__navbar-login">
                Sign In
              </button>
            </Link>
            <Link to="/register" target="_blank">
              <button type="button" className="gpt3__navbar-signup">
                {" "}
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <Link to="/register" target="_blank">
                  <button type="button">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
