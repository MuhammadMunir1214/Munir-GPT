import React from "react";
import "./Pdf.css";
import axios from "axios";

function Pdf() {
  const handlePDF = async () => {
    try {
      const data = {
        pdf_URL: "https://munir-pdf.streamlit.app/",
        query: "query",
      };
      const response = await axios.post("/pdf-reader", data);
      console.log("Backend response", response.data.result);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      <button onClick={handlePDF}>Open PDF</button>
    </div>
  );
}

export default Pdf;
