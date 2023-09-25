import React from "react";
import { CTA, Brand, Navbar } from "./components";
import { Footer, Pdf, OpenAI, Features, WhatGPT3, Header } from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      {/* <OpenAI /> */}
      {/* <CTA /> */}
      {/* <Pdf /> */}
      <Footer />
    </div>
  );
};

export default App;
