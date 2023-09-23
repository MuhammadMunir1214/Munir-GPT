import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";
import robot1 from "../../assets/robot1.png";

const featuresData = [
  {
    title: "AI-Powered Conversations",
    text: "Engage in dynamic and intelligent conversations with our advanced AI chatbot. Benefit from its natural language understanding and contextual responses.",
  },
  {
    title: "PDF Summarization",
    text: "Upload your own PDF files for analysis and ask specific questions about the document's content and gain valuable insights.",
  },
  {
    title: "Smart Language Comprehension",
    text: "Experience Munir-GPT's sophisticated language comprehension capabilities. From improving end distrusts instantly to generating precise and meaningful responses.",
  },
  {
    title: "Unlock a New AI Horizon",
    text: "Embark on a journey into the next frontier of AI technology hub with Munir GPT. Experience a spectrum of cutting-edge AI services, all effortlessly accessible through API keys.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        Experience the Power of Tomorrow, Unleashed Today.
      </h1>
    </div>
    <div className="gpt3__features-container">
      <div className="gpt3__feature-content">
        {featuresData.map((item, index) => (
          <div className="gpt3__feature-item" key={item.title + index}>
            <Feature title={item.title} text={item.text} />
          </div>
        ))}
      </div>
      <div className="gpt3__feature-image">
        <img src={robot1} alt="robot" />
      </div>
    </div>
  </div>
);

export default Features;
