import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is Munir-GPT"
        text="With Munir-GPT, you can engage in interactive and dynamic conversations, benefiting from its chat GPT integration. Additionally, Munir-GPT can analyze your PDFs and engage in informative conversations. Upload PDF Files, Chat, and Explore a World of Knowledge with AI-Powered Insights. "
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Engage in intelligent conversations. Get quick and accurate solutions, supported by natural language understanding and personalized interactions."
      />
      <Feature
        title="PDF Reader"
        text="Upload your own PDF files for analysis and engage in AI-powered conversations to gain valuable insights and ask specific questions about the document content."
      />
      <Feature
        title="Innovative"
        text="Munir-GPTs innovative approach enables seamless interactions, personalized responses, and efficient data analysis, revolutionizing AI technology."
      />
    </div>
  </div>
);

export default WhatGPT3;
