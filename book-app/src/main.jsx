import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { BookContextProvider } from "./Context/BookContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookContextProvider>
      <Router>
        <App />
      </Router>
    </BookContextProvider>
  </StrictMode>
);
