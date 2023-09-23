import React from "react";
import "./footer.css";
import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub, logoCodepen } from "ionicons/icons";
import footer_logo from "../../assets/Munir-GPT-5.png";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img src={footer_logo} className="footer_logo" alt="footer logo" />
          <p className="footer_about">
            Munir-GPT was built upon the foundation of API keys, it serves as a
            central hub for AI technologies, seamlessly connecting the power of
            cutting-edge advancements in the field. <br></br>
            <br></br> <i>More technologies coming soon...</i>
          </p>
        </div>
        <div className="col">
          <h3>
            Contact{" "}
            <div className="bottom_line">
              <span></span>
            </div>
          </h3>
          <p className="footer_email">mmunir1214@gmail.com</p>
        </div>
        <div className="col">
          <h3>
            Links{" "}
            <div className="bottom_line">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="/openAI" target="_blank">
                Open AI
              </a>
            </li>
            <li>
              <a
                href="https://munir-pdf.streamlit.app/"
                target="_blank"
                rel="noreferrer"
              >
                PDF Reader
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            Connect{" "}
            <div className="bottom_line">
              <span></span>
            </div>
          </h3>
          <div className="social_icons">
            <a
              href="https://github.com/MuhammadMunir1214"
              target="_blank"
              rel="noreferrer"
            >
              <IonIcon className="social_icon" icon={logoGithub} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-munir12/"
              target="_blank"
              rel="noreferrer"
            >
              <IonIcon className="social_icon" icon={logoLinkedin} />
            </a>
            <a
              href="https://mmunir.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <IonIcon className="social_icon" icon={logoCodepen} />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">Munir-GPT © 2023 - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
