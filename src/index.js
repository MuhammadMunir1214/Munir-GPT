import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./App.css";
import Pdf from "./containers/pdf/Pdf";
import OpenAI from "./containers/openAI/OpenAI";
import Signup from "./register-backend/authentication/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "pdf",
    element: <Pdf />,
  },
  {
    path: "openAI",
    element: <OpenAI />,
  },
  {
    path: "home",
    element: <home />,
  },
  {
    path: "register",
    element: <Signup />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import App from "./App";
// import Signup from "./register-backend/authentication/Signup";

// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/register" element={<Signup />} />
//     </Routes>
//   </Router>,
//   document.getElementById("root")
// );
