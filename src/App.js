import Register from "./components/register/Register";
import React from "react";
import { CTA, Brand, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Footer, Pdf, OpenAI, Features, WhatGPT3, Header } from "./containers";

import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Routes>
        <Route path="http://localhost:3000/register" element={<Register />} />
      </Routes>
      <Brand />
      <WhatGPT3 />
      <Features />
      {/* <OpenAI /> */}
      {/* <Pdf /> */}
      <Footer />
    </div>
  );
};

export default App;
