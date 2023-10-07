import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import p111 from "../../assets/p111.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Introducing Munir-GPT: Your Conversational Playmate
        </h1>
        <p>
          Munir-GPT is a remarkable chatbot built on the foundation of Chat-GPT.
          Designed as an extraordinary alternative to Chat-GPT, Munir-GPT
          leverages the power of API keys to serve as a versatile hub for
          accessing a diverse array of AI services.
        </p>
        <p2>When will Munir-GPT be available?</p2>
        <p3>
          Probably Never! It's so good at procrastinating that it's become an AI
          master of indefinitely delaying its own launch! It's stuck in an
          infinite loop of perfecting its algorithms and adding just one more
          feature. So, don't hold your breath for Munir-GPT's release; it might
          be too busy finding new ways to avoid hitting the "publish" button!
        </p3>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Enter Your Email" />
          <Link to="/register" target="_blank">
            <button type="button">
              Get Early <br /> Access
            </button>
          </Link>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={p111} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
