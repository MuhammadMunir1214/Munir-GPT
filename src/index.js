import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./App.css";
import Pdf from "./containers/pdf/Pdf";
import OpenAI from "./containers/openAI/OpenAI";
import Signup from "./register-backend/authentication/Signup";
import Login from "./register-backend/authentication/Login";
import PrivateRoute from "./register-backend/authentication/PrivateRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./register-backend/context/AuthContext";

ReactDOM.render(
  <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="https://munir-pdf.streamlit.app/"
          element={
            <PrivateRoute>
              <Pdf />
            </PrivateRoute>
          }
        />
        <Route
          path="https://munir-openai.onrender.com/openAI"
          element={
            <PrivateRoute>
              <OpenAI />
            </PrivateRoute>
          }
        />
        <Route path="register" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
