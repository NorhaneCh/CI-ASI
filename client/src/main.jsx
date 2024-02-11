import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
import { FormationContextProvider } from "./context/FormationContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormationContextProvider>
        <App />
      </FormationContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
