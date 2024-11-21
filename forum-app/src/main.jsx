import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import {ForumProvider} from './Context/forumContext.jsx'
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Router>
    <ForumProvider>
        <App />
    </ForumProvider>
      </Router>
  </StrictMode>
);