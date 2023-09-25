import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./App.css";
import Pdf from "./containers/pdf/Pdf";
import OpenAI from "./containers/openAI/OpenAI";
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
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
