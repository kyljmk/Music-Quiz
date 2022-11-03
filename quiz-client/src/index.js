import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { InfoProvider } from "./hooks/useInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InfoProvider>
      <App />
    </InfoProvider>
  </React.StrictMode>
);
