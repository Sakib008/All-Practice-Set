import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { EmailContextProvider } from "./Context/EmailContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmailContextProvider>
      <Router>
        <App />
      </Router>
    </EmailContextProvider>
  </StrictMode>
);
