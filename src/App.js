import React from "react";
import { Brand, Navbar } from "./components";
import { Footer, Features, WhatGPT3, Header } from "./containers";

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
      <Footer />
    </div>
  );
};

export default App;
