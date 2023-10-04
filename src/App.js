import React from "react";
import { CTA, Brand, Navbar } from "./components";
import { Footer, Pdf, OpenAI, Features, WhatGPT3, Header } from "./containers";
import { AuthProvider } from "./register-backend/context/AuthContext";
import AuthContextProvider from "./register-backend/context/AuthContext";

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
      {/* <Pdf /> */}
      <Footer />
    </div>
  );
};

export default App;
